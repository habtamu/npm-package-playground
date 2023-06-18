import { BufferReader, load, Root, Type } from 'protobufjs'
import { Configuration } from './configuration'
import { getSourceById } from './source'

class ConfigurationDecoder {
    constructor() {}

    getBufferReader = (buffer: Uint8Array): BufferReader => {
        const reader = new BufferReader(buffer)
        reader.float = reader.double
        return reader
    }

    decode = (input: Uint8Array) => {
        let type: Type
        const reader = this.getBufferReader(input)
        load('../confguration.proto').then(root => {
            type = root.lookupType('configurationDef.Configuration')

            const decoded = type.decode(reader).toJSON()
            const { workingTimeSourceId } = decoded
            delete decoded.workingTimeSourceId
            return {
                ...decoded,
                workingTimeSource: getSourceById(workingTimeSourceId).get(),
                inputConfiguration: decoded.inputConfiguration?.map((item: any) => {
                    const inputId = item.inputId
                    delete item.inputId
                    return { ...item, source: getSourceById(inputId).get() }
                })
            } as Configuration
        })
    }

    decodeStatistics = (input: Uint8Array) => {
        const reader = this.getBufferReader(input)
        let statisticsType: Type
        load('../confguration.proto').then(root => {
            statisticsType = root.lookupType('configurationDef.Statistics')
            return statisticsType.decode(reader).toJSON()
        })
    }
}

const configurationDecoder = Object.freeze(new ConfigurationDecoder())
export default configurationDecoder

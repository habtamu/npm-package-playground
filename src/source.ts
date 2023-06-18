import { Optional } from 'typescript-optional'

export interface Source {
    id: number
    name: string
}

export const SourceIds: Source[] = [
    { id: 0, name: 'MCU' },
    { id: 1, name: 'Accelerometer' },
    { id: 2, name: 'Gyroscope' },
    { id: 3, name: 'GNSS' },
    { id: 4, name: 'Temperature input 1' },
    { id: 5, name: 'Temperature input 2' },
    { id: 6, name: 'Temperature input 3' },
    { id: 7, name: 'Analog input 1' },
    { id: 8, name: 'Digital input 1' },
    { id: 9, name: 'Digital input 2' }
]

const SourceNamesMap: Map<string, Source> = new Map(SourceIds.map(item => [item.name, item]))
const SourceIdsMap: Map<number, Source> = new Map(SourceIds.map(item => [item.id, item]))

export const SourcesArray: string[] = SourceIds.map(item => item.name)

export const getSourceByName = (sourceName: string): Optional<Source> =>
    Optional.ofNullable(SourceNamesMap.get(sourceName))

export const getSourceById = (sourceId: number): Optional<Source> =>
    Optional.ofNullable(SourceIdsMap.get(sourceId))

export const DigitalEventKeys = ['NONE', 'HIGH', 'LOW'] as const
export type DigitalEvent = (typeof DigitalEventKeys)[number]

export interface Timestamp {
    seconds: number
    nanos: number
}

export const PhysicalDimensionKeys = [
    'TIME',
    'LENGTH',
    'WEIGHT',
    'TEMPERATURE',
    'SPEED',
    'AREA',
    'VOLUME',
    'ROTATION_SPEED',
    'VOLTAGE',
    'CURRENT',
    'FREQUENCY',
    'FORCE'
] as const
export type PhysicalDimension = (typeof PhysicalDimensionKeys)[number]

export const TimerDataTypeKeys = [
    'FREQUENCY_VALUE',
    'PULSE_COUNTER_PERIOD',
    'PULSE_COUNTER_TOTAL'
] as const
export type TimerDataType = (typeof TimerDataTypeKeys)[number]

export const AnalogRangeKeys = ['ZERO_5V', 'ZERO5_5V'] as const
export type AnalogRange = (typeof AnalogRangeKeys)[number]

export interface Source {
    id: number
    name: string
}

interface MQTTConf {
    username: string
    password: string
}

interface AnalogInputConfiguration {
    offset: number
    multiplier: number
    phyDimension: PhysicalDimension
    minAlarmThreshold?: number
    maxAlarmThreshold?: number
    range: AnalogRange
}

interface DigitalInputConfiguration {
    highLabel?: string
    lowLabel?: string
    alarm?: DigitalEvent
    error?: DigitalEvent
    type?: TimerDataType
    phyDimension?: PhysicalDimension
    minAlarmThreshold?: number
    maxAlarmThreshold?: number
}

interface TemperatureInputConfiguration {
    AParameter: number
    BParameter: number
    CParameter: number
    minAlarmThreshold?: number
    maxAlarmThreshold?: number
}

interface InputConfigurationBase {
    source: Source
    label: string
    acquisitionPeriod: number
    enable: boolean
}

export type InputConfiguration =
    | (InputConfigurationBase & {
          analogInputConfiguration: AnalogInputConfiguration
      })
    | (InputConfigurationBase & {
          digitalInputConfiguration: DigitalInputConfiguration
      })
    | (InputConfigurationBase & {
          temperatureInputConfiguration: TemperatureInputConfiguration
      })

export interface ConfigurationBaseline {
    pinLevel_0: string
    pinLevel_1: string
    mqttPeriodicSendPowered: number
    mqttPeriodicSendBattery: number
    gnssAcquisitionPeriodPowered: number
    gnssAcquisitionPeriodBattery: number
    workingTimeSource: Source
    workingWidth: number
    timeZone: number
    enSavingsTime: boolean
    internalTemperatureAcquisitionPeriod: number
    inputConfiguration: InputConfiguration[]
}

export interface Configuration extends ConfigurationBaseline {
    nonce: number
    MQTTConf: MQTTConf
    timestamp: Timestamp
}

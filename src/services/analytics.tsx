import amplitude from 'amplitude-js'

export const analytics = (event: string, eventProperties: object) => {
  return amplitude.getInstance().logEvent(event, eventProperties)
}

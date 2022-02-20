import { Alert } from '../alerts/Alert'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import { HARD_MODE_ALERT_MESSAGE } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHardModeErrorModalOpen: boolean
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isHardModeErrorModalOpen: isHardModeAlertModalOpen,
}: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
          settingName="Hard Mode"
          flag={isHardMode}
          handleFlag={handleHardMode}
        />
        <Alert
          message={HARD_MODE_ALERT_MESSAGE}
          isOpen={isHardModeAlertModalOpen}
        />
      </div>
    </BaseModal>
  )
}

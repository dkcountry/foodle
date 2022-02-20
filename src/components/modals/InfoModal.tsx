import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the food themed word in 6 tries. Non-food related guesses aren't
        allowed 😲
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="A" />
        <Cell value="S" status="present" />
        <Cell value="T" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter S is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="P" />
        <Cell value="P" />
        <Cell value="L" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is not in the word in any spot.
      </p>
    </BaseModal>
  )
}

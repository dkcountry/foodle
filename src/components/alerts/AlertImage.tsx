import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'
import { getImage } from '../../lib/images'

type Props = {
  isOpen: boolean
  solution: string
}

export const AlertImage = ({ isOpen, solution }: Props) => {
  const image = getImage(solution)
  const classes = classNames(
    'fixed top-28 left-1/2 transform -translate-x-1/2 max-w-xs w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'
  )

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <img className={classes} src={image} alt="" />
    </Transition>
  )
}

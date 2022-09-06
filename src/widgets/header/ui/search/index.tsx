//import modules
import clsx from 'clsx'
import { useState } from 'react'

//import icons
import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'
import { KeyboardIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const Search = () => {
  const [status, setStatus] = useState(false)

  return (
    <div
      style={status ? { minWidth: 'calc(50% + 2rem)' } : { minWidth: '50%' }}
      className={clsx(
        'bg-black pl-3 border-[1px] border-dark-gray flex justify-between items-center h-10',
        {
          ['border-[#0059ff]']: status,
        }
      )}
    >
      <div className="flex h-full items-center w-full">
        <Icon
          className={clsx('mr-3', {
            ['hidden']: !status,
          })}
        >
          <MagnifyingGlassIcon className={clsx('w-5 h-5')} />
        </Icon>
        <Input
          onFocus={() => setStatus(true)}
          onBlur={() => setStatus(false)}
          label="Search"
        />
      </div>
      <div className="flex h-full">
        <Icon>
          <KeyboardIcon className="h-6 w-7 text-light-gray" />
        </Icon>
        <Icon className="bg-dark-gray ml-3 h-full w-20">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </Icon>
      </div>
    </div>
  )
}

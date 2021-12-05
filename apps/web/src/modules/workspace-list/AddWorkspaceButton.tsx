import React from 'react'
import 'twin.macro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AddWorkspaceButton = () => (
  <section>
    <div tw="flex items-center space-x-2 cursor-pointer">
      <FontAwesomeIcon icon="plus" tw="text-gray-500" size="xs" />

      <p tw="text-xl font-medium text-gray-500">Add a Workspace</p>
    </div>
  </section>
)

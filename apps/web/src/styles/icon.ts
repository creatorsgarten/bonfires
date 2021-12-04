import { fas } from '@fortawesome/free-solid-svg-icons'
import { config, library } from '@fortawesome/fontawesome-svg-core'

import '@fortawesome/fontawesome-svg-core/styles.css'

export function setupIcon() {
  library.add(fas)
  config.autoAddCss = false
}

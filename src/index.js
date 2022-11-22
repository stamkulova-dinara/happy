import config from '../data/config.json' assert {type: "json"}
import { renderLink } from './js/modules/app-store-link.js';
import { getCountDown } from './js/modules/get-countdown.js';
import { testimonials } from './js/modules/testimonials.js';
import { renderPlans } from './js/modules/plans.js'
import { darkLightModeFunc } from './js/modules/dark-light-mode.js'
import { modalWindow } from './js/modules/modalwindow.js';
import { sendFormValidation } from './js/modules/sendForm.js';
import { burgerClose } from './js/modules/burger';

import './styles/styles.css';

renderLink(config.appStoreLink)
getCountDown(config.timerEndDate)
testimonials(config.testimonials)
renderPlans(config.plans)
darkLightModeFunc()
modalWindow()
sendFormValidation()
burgerClose()
import { greeting } from "./export.js";
import farewell from './export.js';

import { cjsMessage } from "./cjs.cjs";

import * as dotenv from 'dotenv';

dotenv.config();
const dbToken = process.env.TOKEN;
console.log('dbToken', dbToken);

console.log('greeting', greeting);
console.log('farewell', farewell);
console.log('cjsMessage', cjsMessage);
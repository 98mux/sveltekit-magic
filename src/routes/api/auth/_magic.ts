//import { Magic } from '@magic-sdk/admin'; // Gives this error: SyntaxError: Named export 'Magic' not found. The requested module '@magic-sdk/admin' is a CommonJS module, which may not support all module.exports as named exports.
import pkg from '@magic-sdk/admin';
const {Magic} = pkg;
import { MAGIC_SECRET_KEY } from '$lib/config';

export const magic = new Magic(MAGIC_SECRET_KEY);

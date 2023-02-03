import { Imprimivel } from '@utils/index'
import { Comparavel } from './comparavel'

export interface Modelo<T> extends Imprimivel, Comparavel<T> {
}
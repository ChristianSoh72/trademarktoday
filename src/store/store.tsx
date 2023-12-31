import { ContextType, StateType } from '@/types/interface';
import { createContext } from 'react';
export const initialState: StateType = {
    otp: false,
    code: '',
    waiting:false,
    formData: {
        email: '',
        name: '',
        password: '',
        given_name: '',
        family_name: ''
    }
}
export const OTPStore = createContext<ContextType>({
    otpState: initialState,
    dispatchOtpState: (_: {}) => { }
});
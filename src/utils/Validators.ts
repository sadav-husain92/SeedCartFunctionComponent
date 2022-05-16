/**
 DATA VALIDATORS
 */

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,}$/;
const phoneNoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const nameRegex = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
const otpRegex = /[0-9]/;

export const isEmailValid = (email: any) =>{
    return regex.test(email)
}

export const isNameValid = (name: any) =>{
    return nameRegex.test(name)
}

export const isPasswordValid = (password: any) =>{
    return passwordRegex.test(password)
}

export const isPhoneNoValid = (phone: any) =>{
    return phoneNoRegex.test(phone)
}

export const isOTPValid = (otp: any) => {
    return otpRegex.test(otp)
}
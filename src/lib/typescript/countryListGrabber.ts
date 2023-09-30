import { countryCodeToCountryNameMap } from "../../../private/countryList"
export function getRandomCountryCode() {
    return Object.keys(countryCodeToCountryNameMap)[Math.floor(Math.random() * Object.keys(countryCodeToCountryNameMap).length)];
}

export function getNameFromCode(code: string) {
    let temp = Object.values(countryCodeToCountryNameMap)[Object.keys(countryCodeToCountryNameMap).indexOf(code)]
    if(typeof temp === "string") {
        return [temp]
    } else {
        return temp
    }
}
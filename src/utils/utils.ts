export function isInteger(input: string){
    return (/^\d+$/).test(input ?? "")
}


export function streetOffsets(distance,period){
 return {mid:distance%Math.max(1,period),far:(distance*.35)%2568,near:(distance*1.14)%130};
}
export function streetCopies(viewport,period){return Math.ceil(viewport/Math.max(1,period))+1;}

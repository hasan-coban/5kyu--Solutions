/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
//My S:
function rgb(r, g, b){
  function decToHex(p){
    if(p>255) return "FF";
    else if(p<0) return "00";
    else
      //in case the vals are 0
      return p.toString(16).padStart(2,"0").toUpperCase();
      }  
  return decToHex(r)+decToHex(g)+decToHex(b);
}

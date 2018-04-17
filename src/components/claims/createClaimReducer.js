const initialState = [{
  
    "NeedState": {
      "1": "Baby" , 
      "2": "Beauty" ,
      "3": "Femina Care",
      "4": "Hair Care",
      "5": "Oral Care",
      "6": "OTC",
      "7": "Wound Care"
  }
}, 
  {
  "PrdctForm": {
    "1": "Aerosol", 
    "2": "Bandage", 
    "3": "Caplet",
    "4": "Capsule"
     }
  },

  {
    "ClaimType": {
      "1": "Product Claim", 
      "2": "Brand Claim", 
      "3": "Experience Claim"
      }
    },

    {
      "BenefitArea": {
        "1": "Cleansing", 
        "2": "Composition/Product Design", 
        "3": "Efficacy"
        }
    },

    {
      "Region": {
        "1": "AP", 
        "2": "EMEA", 
        "3": "LATAM",
        "4": "NA"
        }
    }

]; 
 


export function navigateToDetail(state = initialState, action) {
      return state;
}
  
  
  
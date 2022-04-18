const catBreeds = {
  Balinese:
    "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  Bombay:
    "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

const getBreedDetails = function(breed) {
  const breedDetails = catBreeds[breed]; // dynamic parameter
  if (!breedDetails) {
   return `No matching details for this breed: ${breed}`;
  }
  return breedDetails;
};

const bombay = getBreedDetails("Bombay"); // "Bombay" passed into getBreedDetails
// as an argument.
console.log(bombay);
const someCat = getBreedDetails("Garfield");
console.log(someCat);

/* As per mentor Pedro's advice: Declare and validate ALWAYS.
Refer to LInes 9 to 12. Declare a variable that contains the value
you're looking for. Then if that value cannot be found anywhere within
the object, return a message. This avoids having an UNDEFINED being returned.
Having undefined returned is not specific at all.
The declare and validate approach means you take care of scenarios
where a value being passed in cannot be found. */
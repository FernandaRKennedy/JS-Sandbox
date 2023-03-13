const newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
const newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
const newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

//for loop over car models and print the model 
for (let i = 0; i < newInventoryCarModels.length; i++) {
         console.log(newInventoryCarModels[i])
        }


        //count the number of S1 MODELS 
let s1Total = 0 
 for (let i = 0; i < newInventoryCarModels.length; i++) {
    if(newInventoryCarModels[i] === 'S1') s1Total++
            }
            console.log ('S1 Total:', s1Total)

            
            
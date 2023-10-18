import csv
# According to same longitude considering all latitude coordinates at same line of 90degree

ClusterRange=[20,40,60,80,90]
clusters=[[],[],[],[],[]]


def putLocationsIntoCluster(latitudeValueOfLocation,location):
    
    ClusterId=0
    for eachRangeOfCluster in ClusterRange:
        ClusterId=ClusterId+1
        if latitudeValueOfLocation<=eachRangeOfCluster:
        
            clusters[ClusterId-1].append(location)
            break


def convertDegreeStringToNumber(latitude_String,location):
    value_Of_Latitude_Degree = ""
    for eachCharacter in latitude_String:
       if eachCharacter == "°":
        break  
       value_Of_Latitude_Degree += eachCharacter
       putLocationsIntoCluster(int(value_Of_Latitude_Degree),location)
    
with open('locations.csv', 'r') as file:
 
    locations = csv.DictReader(file)
    
    for location in locations:
        
        convertDegreeStringToNumber(location["Latitude"],location)
           
    
       
           
# readLocationCsvfile()        
for cluster in clusters:
    print("cluster")
    
    for location in cluster:
        print(location)
    print("\n\n")
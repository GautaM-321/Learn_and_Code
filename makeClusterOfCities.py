<<<<<<< HEAD
import csv
# According to the same longitude considering all latitude coordinates at the same line of 90 degrees

ClusterRange = [20, 40, 60, 80, 90]
clusters = [[], [], [], [], []]

def putLocationsIntoCluster(latitudeValueOfLocation, location):
    ClusterId = 0
    for eachRangeOfCluster in ClusterRange:
        ClusterId = ClusterId + 1
        if latitudeValueOfLocation <= eachRangeOfCluster:
            clusters[ClusterId - 1].append(location["Location"])
            break

def convertDegreeStringToNumber(latitude_String, location):
    value_Of_Latitude_Degree = ""
    for eachCharacter in latitude_String:
        if eachCharacter == "°":
            break
        value_Of_Latitude_Degree += eachCharacter
    putLocationsIntoCluster(int(value_Of_Latitude_Degree), location)

def readLocationCsvfile():
    with open('locations.csv', 'r') as file:
        locations = csv.DictReader(file)
        for location in locations:
            convertDegreeStringToNumber(location["Latitude"], location)

# readLocationCsvfile()
def displayClusters():
    clusterNumber = 0
    for cluster in clusters:
        clusterNumber = clusterNumber + 1
        print("Cluster", clusterNumber)
        for location in cluster:
            print(location)
        print("\n\n")
        
readLocationCsvfile()
displayClusters()        
=======
import csv
# According to same longitude considering all latitude coordinates at same line of 90degree

ClusterRange=[20,40,60,80,90]
clusters=[{},{},{},{},{}]


def putLocationsIntoCluster(latitudeValueOfLocation,location):
    
    ClusterId=0
    for eachRangeOfCluster in ClusterRange:
        ClusterId=ClusterId+1
        if latitudeValueOfLocation<=eachRangeOfCluster:
        
            clusters[ClusterId-1]=location
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
print(clusters)
>>>>>>> d8e245b5be795488bf8ceaf7d9acbb38e68ff6ef

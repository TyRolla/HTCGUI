HTC GUI Guide

GitHub Link to Build: https://github.com/TyRolla/HTCGUI
Web Application created by: Ty Uehara (ty.uehara@hawaiiantel.com)

Libraries and Frameworks Used w/ version number
Axios (GET/POST Request)
Material UI (CSS)
Node.js
npm
React.js (Web Dev Framework)
SheetJSApp (xlsx)

 About HTC GUI:
This web application was created to allow planners instant access to all parcel data for the State of Hawaii. All data used is stored on a SQL server that is managed by the data team (see Kalani for details of who).  Please continue to build and maintain the HTC GUI and other internal web applications made for the planning/engineering department. The data the HTC GUI uses will directly help analytics determine if the planning/engineering department are building optimally. 

Home Component (Homepage.js)
This component has a non functional login component which acts as the homepage. The username is saved into state and used when routing to other components. I did this to allow users to see that they are the one accessing their account for future implementation. The web application will remain fully functional without this component

Navigation Bar (NavBar.js)
Nav bar is used on every component besides the Homepage.js component. Created using pure CSS and branding found on the Hawaiian Telcom website (http://myht/about_us/our_brand/brand_resources/Hawaiian%20Telcom%20Logos/Forms/AllItems.aspx)

Not Found (NotFound.js)
This component will display when the user accesses an unknown directory. 

Option Homescreen (Option.js)
This component gives the user three options (as of 7/29/2020) to choose single search, multi search, and access to the polygon tool. The buttons were created using material UI. 

Routing Component (Router.js)
This component ensures that the buttons route to the correct components. 

Single Search (CAFSearch.js)
getRequest() grabs the refs for both the countyURL and parcel ID. We are using these two values that we retrieve from the user input from material UI text input. After using these refs we then can generate an api request using axios. The data is then saved to this.parcelRef and later be added to state using the createQuery function. The createQuery function then creates an object which will hold the county, parcel ID, and parcel data we pulled using the axios get request. The handleChange method is completely useless and can be removed at any time. We use axios async and await for these function calls because we want to make sure that the data is pulled first before the state is generated. Without these promises we will need to press the “search” button twice because the state will fill with null if we don’t. We then call twoFunction to first pull the data, then create the query in that mandatory order. The jsx is very straight forward and easy to follow. 

Multi Search Component (MultiSearch.js)
This component allows a planner/engineer to make multiple get requests to the server at once. I used the SheetJS library to allow the planner to create an excel sheet with each row having a seperate query. I’ve attached an example below.

As you can see there are only two search parameters. This will make things as easy as possible for the planners considering they may be inputting hundreds of queries in one sheet. 





I broke apart the multisearch component into two parts. 1: Turning the excel sheet into a query of get requests and rendering these requests on the web application so the planner knows what they are searching for. 2: Executing the query of get requests and rendering the data on the webpage.

Executing the get requests (MultiSeachButton.js)
This component takes the data from the state. In this case the data is an array of text grouped by row. Multisearch Button then loops through the data and generates endpoints (api calls). I store these api calls in another array. I then loop over this array to generate my get requests in the same way I did for the single search. I then store each data result from each query in another array (I know the space complexity is looking bad here). Then I use the map function to render all of the data in JSX. 




Parcel Table (ParcelTable.js)
This component structures the data in a readable format for the engineers. Without using a table to label the api data we receive, it will look very jumbled up and similar to this…
 {"parcels":{"recordsets":[[{"ID":378856,"TMK":"911000100000","PropertyClass":"RESIDENTIAL","ParcelAddress":"91-1041 MANAOPAA ST","County":"Honolulu","StateCode":"HI","GeoID":150030084051002,"Latitude":21.341399,"Longitude":-158.018523,"Acreage":0.0868,"SquareFootage":3780,"ProjectName":"SEABREEZE","NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0},{"ID":410468,"TMK":"941100010000","PropertyClass":"RESIDENTIAL","ParcelAddress":"94-235 KEAOLANI ST","County":"Honolulu","StateCode":"HI","GeoID":150030089083012,"Latitude":21.443675,"Longitude":-158.02446,"Acreage":0.116,"SquareFootage":5055,"ProjectName":null,"NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0},{"ID":321429,"TMK":"451100010000","PropertyClass":"RESIDENTIAL A","ParcelAddress":"45-188 IKENAKAI ST","County":"Honolulu","StateCode":"HI","GeoID":150030107011013,"Latitude":21.406231,"Longitude":-157.784791,"Acreage":0.167,"SquareFootage":7276,"ProjectName":null,"NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0},{"ID":380368,"TMK":"911100010000","PropertyClass":"RESIDENTIAL","ParcelAddress":"91-1078 KAIOPUA ST","County":"Honolulu","StateCode":"HI","GeoID":150030084071006,"Latitude":21.320004,"Longitude":-158.019249,"Acreage":0.1326,"SquareFootage":5775,"ProjectName":null,"NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0}]],"recordset":[{"ID":378856,"TMK":"911000100000","PropertyClass":"RESIDENTIAL","ParcelAddress":"91-1041 MANAOPAA ST","County":"Honolulu","StateCode":"HI","GeoID":150030084051002,"Latitude":21.341399,"Longitude":-158.018523,"Acreage":0.0868,"SquareFootage":3780,"ProjectName":"SEABREEZE","NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0},{"ID":410468,"TMK":"941100010000","PropertyClass":"RESIDENTIAL","ParcelAddress":"94-235 KEAOLANI ST","County":"Honolulu","StateCode":"HI","GeoID":150030089083012,"Latitude":21.443675,"Longitude":-158.02446,"Acreage":0.116,"SquareFootage":5055,"ProjectName":null,"NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0},{"ID":321429,"TMK":"451100010000","PropertyClass":"RESIDENTIAL A","ParcelAddress":"45-188 IKENAKAI ST","County":"Honolulu","StateCode":"HI","GeoID":150030107011013,"Latitude":21.406231,"Longitude":-157.784791,"Acreage":0.167,"SquareFootage":7276,"ProjectName":null,"NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0},{"ID":380368,"TMK":"911100010000","PropertyClass":"RESIDENTIAL","ParcelAddress":"91-1078 KAIOPUA ST","County":"Honolulu","StateCode":"HI","GeoID":150030084071006,"Latitude":21.320004,"Longitude":-158.019249,"Acreage":0.1326,"SquareFootage":5775,"ProjectName":null,"NeighborhoodCode":null,"LegalCode":null,"ResidentialBuildingCount":1,"CommercialBuildingCount":0}],"output":{},"rowsAffected":[4]},"assessmentInformation":{"recordsets":[[]],"recordset":[],"output":{},"rowsAffected":[0]},"commercialBuildings":{"recordsets":[[]],"recordset":[],"output":{},"rowsAffected":[0]},"owner":{"recordsets":[[]],"recordset":[],"output":{},"rowsAffected":[0]},"residentialBuildings":{"recordsets":[[]],"recordset":[],"output":{},"rowsAffected":[0]}}

That is why parcel tables are used when rendering data. 

PolygonTool.js
This is a tool created by a former data science engineer. He created an application to retrieve parcel data by using google maps. The engineer can draw a parcel on the map and retrieve all data within the polygon they drew. This tool is an extension of the GUI because it helps planners and engineers retrieve CAF data. 



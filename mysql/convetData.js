let apartments = [
    { id: 1, title: 'Brokered by Nest Seekers International, Tribeca', description: 'New - 15 Hours ago', cityId: 1, owner: 1, price: 3000, propertyType: "house", main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_5.jpg"], number_of_beds: 3, number_of_rooms: 4, address: '330 3rd Ave', sqft: 7500, status: 2, for_rent: false, for_sale: true },
    { id: 2, title: 'Brokered by COMPASS', description: 'New', cityId: 6, owner: 1, price: 350, propertyType: "any", number_of_beds: 5, number_of_rooms: 5, address: '330 3rd Ave', main_image: "images/apartment/apartment_2.jpg", images: ["images/apartment/apartment_6.png", "images/apartment/apartment_7.jpg", "images/apartment/apartment_8.jpg", "images/apartment/apartment_9.jpg", "images/apartment/apartment_1.jpg"], for_rent: true, for_sale: false },
    { id: 3, title: 'Brokered by Douglas Elliman - 936 Broadway', description: 'NEW', cityId: 17, owner: 1, price: 2230, propertyType: "any", main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg"], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
    { id: 4, title: 'Brokered by Nest Seekers International, Tribeca', description: 'NEW', cityId: 13, owner: 2, price: 2430, propertyType: "any", number_of_beds: 1, number_of_rooms: 1, address: 'Saloona 23 st', main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_1.jpg"], for_rent: false, for_sale: true },
    { id: 5, title: 'Brokered by Nest Seekers International, Tribeca', description: 'NEW', cityId: 4, owner: 1, price: 54330, propertyType: "any", main_image: "images/apartment/apartment_4.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 4, address: 'Rozeni 423 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
    { id: 6, title: 'Brokered by Douglas Elliman - 936 Broadway', description: 'New - 15 Hours ago', cityId: 2, owner: 4, price: 233230, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Zurik 52 st', main_image: "images/apartment/apartment_5.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: true },
    { id: 7, title: 'Brokered by COMPASS', description: 'New - 9 Hours ago', cityId: 15, owner: 1, price: 456630, propertyType: "any", main_image: "images/apartment/apartment_6.png", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 4, address: 'Korab 41 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
    { id: 8, title: 'Brokered by Douglas Elliman - 936 Broadway', description: 'New OPEN HOUSE 11/12', cityId: 21, owner: 8, price: 343530, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Moris 422 st 33s', main_image: "images/apartment/apartment_7.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
    { id: 9, title: 'Brokered by Douglas Elliman - 936 Broadway', description: 'NEW', cityId: 16, owner: 7, price: 30, propertyType: "any", main_image: "images/apartment/apartment_8.jpg", images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: false, for_sale: true },
    { id: 10, title: 'Brokered by COMPASS', description: 'New', cityId: 12, owner: 6, price: 33450, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_9.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: true },
    { id: 11, title: 'Brokered by Nest Seekers International, Tribeca', description: 'NEW - 12 Hours ago', cityId: 20, owner: 1, price: 320, propertyType: "any", main_image: "images/apartment/apartment_1.jpg", images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: true },
    { id: 12, title: 'Brokered by Sothebys International Realty - Downtown Manhattan', description: 'New', cityId: 7, owner: 2, price: 345660, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
    { id: 13, title: 'Brokered by Citi Habitats - CH Upper East Side', description: 'NEW', cityId: 8, owner: 1, price: 30, propertyType: "any", main_image: "images/apartment/apartment_1.jpg", images: ['https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg', 'https://ap.rdcpix.com/1759188762/861b901071ac8c0bbb7d4ee13c9296a3l-m0xd-w1020_h770_q80.jpg'], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
    { id: 14, title: 'Brokered by Citi Habitats - CH Upper East Side', description: 'NEW', cityId: 9, owner: 2, price: 30, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
    { id: 15, title: 'Brokered by Nest Seekers International, Tribeca', description: 'New - 15 Hours ago', cityId: 9, owner: 1, price: 30, propertyType: "any", main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
    { id: 16, title: 'Brokered by COMPASS', description: 'NEW', cityId: 10, owner: 2, price: 30, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
    { id: 17, title: 'Brokered by Nest Seekers International, Tribeca', description: 'NEW OPEN HOUSE 11/13', cityId: 19, owner: 1, price: 30, propertyType: "any", main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
    { id: 18, title: 'Brokered by COMPASS', description: 'NEW OPEN HOUSE 11/12', cityId: 5, owner: 2, price: 30, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], for_rent: true, for_sale: false },
    { id: 19, title: 'Brokered by COMPASS', description: 'New', cityId: 6, owner: 1, price: 30, propertyType: "any", main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_1.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_4.jpg"], number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', sqft: 7500, status: 2, for_rent: true, for_sale: false },
    { id: 20, title: 'Brokered by Nest Seekers International, Tribeca', description: 'New', cityId: 2, owner: 2, price: 30, propertyType: "any", number_of_beds: 3, number_of_rooms: 4, address: 'Alenby 3 st', main_image: "images/apartment/apartment_1.jpg", images: ["images/apartment/apartment_8.jpg", "images/apartment/apartment_2.jpg", "images/apartment/apartment_1.jpg", "images/apartment/apartment_4.jpg", "images/apartment/apartment_7.jpg"], for_rent: true, for_sale: false }
];
// let result = "";
// apartments.forEach(ap => {
//     result += "(";
//     result += `DEFAULT,${(ap.id)%6+1},'${ap.address}',${getRndInteger()},${ap.price*10000},${ap.number_of_rooms},${ap.number_of_beds},${getSQFR()},'${ap.description}','both','available','condo',1,'${ap.main_image}'`
//     result += "),"
// });

// function getRndInteger() {
//     return Math.floor(Math.random() * (1103089 - 1102076)) + 1102076;
// }

// function getSQFR() {
//     return Math.floor(Math.random() * (1000 - 50)) + 50;
// }
let result = "";
apartments.forEach(ap => {
    ap.images.forEach(image => {
        result += "(";
        result += `DEFAULT, ${ap.id},'${image}'`
        result += "),\n";

    });
});

console.log(result);
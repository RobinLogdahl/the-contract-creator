using HandlebarsDotNet;
using Service.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class ContractService
    {
        private static ContractService _instance;
        public static ContractService Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new ContractService();
                }
                return _instance;
            }
        }
        private ContractService() { }
        public string PurchaseAgreementCreator(PurchaseAgreementDTO contract)
        {
            string path = "..\\purchase-agreement.html";

            string[] sourceArr = File.ReadAllLines(path);

            string source = String.Concat(sourceArr);

            var template = Handlebars.Compile(source);

            var data = new
            {
                buyerName = contract.BuyerName,
                buyerSocial = contract.BuyerSocialSecurity,
                buyerAddress = contract.BuyerAddress,
                buyerPhone = contract.BuyerPhone,
                sellerName = contract.SellerName,
                sellerSocial = contract.SellerSocialSecurity,
                sellerAddress = contract.SellerAddress,
                sellerPhone = contract.SellerPhone,
                objectName = contract.Object,
                objectPrice = contract.Price,
                objectOtherInfo = contract.Other
            };

            var result = template(data);
            return result;
        }

        public string RentalAgreementCreator(RentalAgreementDTO contract)
        {
            string path = "..\\rental-agreement.html";

            string[] sourceArr = File.ReadAllLines(path);

            string source = String.Concat(sourceArr);

            var template = Handlebars.Compile(source);

            var data = new
            {
                buyerName = contract.BuyerName,
                buyerSocial = contract.BuyerSocialSecurity,
                buyerAddress = contract.BuyerAddress,
                buyerPostalCode = contract.BuyerPostalCode,
                buyerCity = contract.BuyerCity,
                buyerPhone = contract.BuyerPhone,
                buyerEmail = contract.BuyerEmail,

                sellerName = contract.SellerName,
                sellerSocial = contract.SellerSocialSecurity,
                sellerAddress = contract.SellerAddress,
                sellerPostalCode = contract.SellerPostalCode,
                sellerCity = contract.SellerCity,
                sellerPhone = contract.SellerPhone,
                sellerEmail = contract.SellerEmail,

                objectName = contract.ObjectName,
                objectNumber = contract.ObjectNumber,
                objectAddress = contract.ObjectAddress,
                objectPostalCode = contract.ObjectPostalCode,
                objectCity = contract.ObjectCity,
                objectPurpose = contract.ObjectPurpose,
                objectPrice = contract.ObjectPrice,
                objectArea = contract.ObjectArea,
                objectAmountOfRooms = contract.ObjectAmountOfRooms,
                objectOtherInfo = contract.Other
            };

            var result = template(data);
            return result;
        }

        public string RentalAgreementCreatorTwoBuyers(RentalAgreementTwoBuyersDTO contract)
        {
            string path = "..\\rental-agreement-two-buyers.html";

            string[] sourceArr = File.ReadAllLines(path);

            string source = String.Concat(sourceArr);

            var template = Handlebars.Compile(source);

            var data = new
            {
                renterName = contract.BuyerName,
                renterSocial = contract.BuyerSocialSecurity,
                renterAddress = contract.BuyerAddress,
                renterPostalCode = contract.BuyerPostalCode,
                renterCity = contract.BuyerCity,
                renterPhone = contract.BuyerPhone,
                renterEmail = contract.BuyerEmail,

                renterName2 = contract.BuyerName2,
                renterSocial2 = contract.BuyerSocialSecurity2,
                renterAddress2 = contract.BuyerAddress2,
                renterPostalCode2 = contract.BuyerPostalCode2,
                renterCity2 = contract.BuyerCity2,
                renterPhone2 = contract.BuyerPhone2,
                renterEmail2 = contract.BuyerEmail2,

                sellerName = contract.SellerName,
                sellerSocial = contract.SellerSocialSecurity,
                sellerAddress = contract.SellerAddress,
                sellerPostalCode = contract.SellerPostalCode,
                sellerCity = contract.SellerCity,
                sellerPhone = contract.SellerPhone,
                sellerEmail = contract.SellerEmail,


                rentalName = contract.ObjectName,
                rentalNumber = contract.ObjectNumber,
                rentalAddress = contract.ObjectAddress,
                rentalPostalCode = contract.ObjectPostalCode,
                rentalCity = contract.ObjectCity,
                rentalPurpose = contract.ObjectPurpose,
                rentalPrice = contract.ObjectPrice,
                rentalArea = contract.ObjectArea,
                rentalAmountOfRooms = contract.ObjectAmountOfRooms,
                rentalOtherInfo = contract.Other
            };

            var result = template(data);
            return result;
        }

        public string GenerateDynamicContract(BuyerDTO buyer, SellerDTO seller)
        {
            var header = FileToString("contract-header");

            var buyerString = FileToString("buyer-info");

            var sellerString = FileToString("seller-info");

            var footer = FileToString("contract-footer");

            var body = String.Concat(header, buyerString, sellerString, footer);

            var template = Handlebars.Compile(body);

            var oneBuyer = new
            {
                buyerName = buyer.BuyerName,
                buyerSocial = buyer.BuyerSocialSecurity,
                buyerAddress = buyer.BuyerAddress,
                buyerPhone = buyer.BuyerPhone,
            };

            var oneSeller = new
            {
                sellerName = seller.SellerName,
                sellerSocial = seller.SellerSocialSecurity,
                sellerAddress = seller.SellerAddress,
                sellerPhone = seller.SellerPhone,
            };
            var result = template(oneBuyer, oneSeller);

            return result;
        }

        public string FileToString(string input)
        {
            string file = $"..\\{input}.html";

            string[] fileArray = File.ReadAllLines(file);

            string fileResult = String.Concat(fileArray);

            return fileResult;
        }
    }
}

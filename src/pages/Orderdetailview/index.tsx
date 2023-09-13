import React from "react";

import { Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const frame34816OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OrderdetailviewPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[329px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_3.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1268px] mx-auto pt-[9px] md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32Bluegray900"
            >
              Order details
            </Text>
            <SelectBox
              className="sm:flex-1 font-medium mt-1 text-blue-A700 text-left text-lg w-[8%] sm:w-full"
              placeholderClassName="text-blue-A700"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="Frame34816"
              options={frame34816OptionsList}
              isSearchable={false}
              placeholder="Invoice"
              size="xs"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[67%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start pr-[5px] pt-[5px] w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    <span className="text-colors4 font-gilroy text-left font-semibold">
                      Order Id:
                    </span>
                    <span className="text-colors4 font-gilroy text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-colors font-gilroy text-left font-medium">
                      #21204034879
                    </span>
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Shipping Address
                    </Text>
                    <Text
                      className="leading-[29.00px] text-blue_gray-900 text-lg w-full"
                      size="txtGilroyRegular18"
                    >
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[22px] items-start justify-start">
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroySemiBold18Black900"
                    >
                      Payment Method
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroyRegular18"
                    >
                      BHIM UPI
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-green-600 sm:text-xl"
                  size="txtGilroyMedium24Green600"
                >
                  Delivered 02, May 2022
                </Text>
                <div className="flex md:flex-col flex-row font-opensans gap-4 items-center justify-start w-full">
                  <Img
                    className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                    src="images/img_pngwing1.png"
                    alt="pngwingOne"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[76%] md:w-full">
                    <Text
                      className="leading-[30.00px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                      size="txtOpenSansMedium24Bluegray900"
                    >
                      Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                    </Text>
                    <Text
                      className="mt-5 text-blue_gray-400 text-xl"
                      size="txtOpenSansMedium20"
                    >
                      (Blue,6GB RAM, 128GB Storage)
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[18px] w-[16%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtOpenSansMedium18"
                      >
                        Color:
                      </Text>
                      <Text
                        className="ml-1 text-blue_gray-400 text-lg"
                        size="txtOpenSansMedium18Bluegray400"
                      >
                        Blue
                      </Text>
                    </div>
                    <Text
                      className="mt-[17px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtOpenSansMedium24Bluegray900"
                    >
                      <span className="text-colors font-opensans text-left font-semibold">
                        $
                      </span>
                      <span className="text-colors9 font-opensans text-left font-semibold">
                        555.29
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[179px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Price Details
                  </Text>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-7 items-center justify-start mt-[15px] pt-[5px] w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Price(2 iteam)
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      $1110.58
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Discount
                    </Text>
                    <Text
                      className="text-green-600 text-lg"
                      size="txtGilroyMedium18Green600"
                    >
                      -$111.98
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Delivery Charges
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      $10
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[21px] w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    <span className="text-colors2 font-gilroy text-left font-medium">
                      Donate{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-colors8 font-gilroy text-left font-medium underline"
                    >
                      Remove
                    </a>
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    $2
                  </Text>
                </div>
                <Line className="bg-blue_gray-100 h-px mt-[22px] w-full" />
                <div className="flex flex-row items-center justify-between mt-[15px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Total Amount
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    $1120.58
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderdetailviewPage;

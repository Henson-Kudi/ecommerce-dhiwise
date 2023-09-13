import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CollectTransactionFeesPage: React.FC = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto pb-[82px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_35X162.svg"
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
        <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-lg shadow-bs1 w-[68%] md:w-full">
            <div className="flex flex-col items-center justify-start mb-4 w-[97%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Payment Options
                </Text>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start mt-7 p-4 rounded w-full">
                <div className="flex flex-col gap-[30px] justify-start my-2 w-full">
                  <div className="flex flex-row font-gilroy gap-4 items-center justify-start md:pr-10 sm:pr-5 pr-[577px] w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_radiobutton.svg"
                      alt="RadioButton"
                    />
                    <div className="flex flex-row gap-4 items-end justify-center w-[71%]">
                      <Img
                        className="h-[34px] w-[37%]"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                      <Text
                        className="mb-0.5 mt-2 text-black-900_01 text-xl"
                        size="txtGilroyMedium20"
                      >
                        Paypal
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium font-opensans md:ml-[0] ml-[52px] mr-[202px] text-base text-center w-[500px]"
                    shape="round"
                    color="blue_A700"
                    size="lg"
                    variant="fill"
                  >
                    Pay $1120.58
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row gap-4 items-center justify-between mt-6 p-4 rounded w-full">
                <Img
                  className="h-9 md:mt-0 my-2 w-9"
                  src="images/img_search.svg"
                  alt="search"
                />
                <div className="flex flex-row gap-4 items-center justify-start pr-1 py-1">
                  <Img
                    className="h-4 md:h-auto object-cover w-[7%]"
                    src="images/img_image46.png"
                    alt="imageFortySix"
                  />
                  <Text
                    className="text-black-900_01 text-xl"
                    size="txtGilroyMedium20"
                  >
                    UPI
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col gap-6 items-center mt-6 w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    className="h-9 md:mt-0 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search One"
                  />
                  <Img
                    className="h-[30px]"
                    src="images/img_paymentmethod.svg"
                    alt="PaymentMethod"
                  />
                  <div className="flex flex-col items-start justify-start pr-[5px] pt-[5px]">
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Google Pay
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    className="h-9 md:mt-0 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search Two"
                  />
                  <Img
                    className="h-[34px] md:h-auto object-cover"
                    src="images/img_amazonpng51.png"
                    alt="amazonPNGFiftyOne"
                  />
                  <div className="flex flex-col items-start justify-start pr-1.5 pt-1.5">
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Amazon Pay
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded w-full">
                  <Img
                    className="h-9 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search Three"
                  />
                  <div className="flex flex-row gap-4 items-end justify-center w-[23%]">
                    <Img
                      className="h-[34px] w-[27%]"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <Text
                      className="mb-0.5 mt-2 text-black-900_01 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Net Banking
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded w-full">
                  <Img
                    className="h-9 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search Four"
                  />
                  <div className="flex flex-row gap-4 items-end justify-center w-[29%]">
                    <Img
                      className="h-[34px] w-[21%]"
                      src="images/img_offer.svg"
                      alt="offer"
                    />
                    <Text
                      className="mb-0.5 mt-2 text-black-900_01 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Cash on Delivery
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start md:mt-0 mt-3 w-[32%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[67%] md:w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_check1.png"
                alt="checkOne"
              />
              <Text
                className="mt-[11px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtGilroyBold24"
              >
                Thank You!
              </Text>
              <Text
                className="mt-4 text-blue_gray-900 text-lg"
                size="txtGilroySemiBold18Bluegray900"
              >
                Your transaction was successful
              </Text>
            </div>
            <div className="flex flex-col items-center justify-end py-[5px] w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  Transaction ID:
                </Text>
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18Bluegray900"
                >
                  21204034879
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[21px] w-full">
                <Text
                  className="mt-[5px] text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  Date and Time:
                </Text>
                <Text
                  className="leading-[29.00px] text-blue_gray-900 text-lg text-right"
                  size="txtGilroyMedium18Bluegray900"
                >
                  April 30, 2022 at 4:46 pm
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-4 w-full">
                <Text
                  className="mt-[5px] text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  TO:
                </Text>
                <Text
                  className="leading-[29.00px] text-blue_gray-900 text-lg text-right"
                  size="txtGilroyMedium18Bluegray900"
                >
                  <>
                    Angelyn Weiner
                    <br />
                    (HDFC Bank)
                  </>
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[21px] w-full">
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  Amount:
                </Text>
                <Text
                  className="text-blue-A700 text-lg"
                  size="txtGilroyMedium18BlueA700"
                >
                  $20000
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  Transaction Fees:
                </Text>
                <Text
                  className="text-blue-A700 text-lg"
                  size="txtGilroyMedium18BlueA700"
                >
                  $200
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroyMedium18"
                >
                  Total:
                </Text>
                <Text className="text-blue-A700 text-lg" size="txtGilroyBold18">
                  $20200
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectTransactionFeesPage;

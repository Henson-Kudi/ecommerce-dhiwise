import React from "react";

import { Button, Img, Input, Text } from "components";

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[150px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start mb-[375px] w-[47%] md:w-full">
          <Img
            className="h-[35px] w-[31%]"
            src="images/img_group_1.svg"
            alt="Group"
          />
          <div className="flex flex-col gap-4 items-center justify-start mt-[62px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtGilroySemiBold32Bluegray900"
            >
              Forgot your password
            </Text>
            <Text
              className="text-blue_gray-500 text-lg"
              size="txtGilroyRegular18Bluegray500"
            >
              No worries, we’ll send you reset instructions.
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start mt-[29px] w-full">
            <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18Bluegray900"
              >
                Email
              </Text>
              <Input
                name="Group10198"
                placeholder="Enter Your Email"
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                type="email"
                shape="round"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[528px] sm:min-w-full rounded-md text-base text-center"
              shape="round"
              color="blue_A700"
              size="lg"
              variant="fill"
            >
              Reset Password
            </Button>
            <div className="flex flex-row font-poppins gap-2 items-start justify-center w-[31%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft_blue_A700.svg"
                alt="arrowleft"
              />
              <Text
                className="mt-1 text-blue-A700 text-lg"
                size="txtPoppinsRegular18"
              >
                Back to Sign in
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;

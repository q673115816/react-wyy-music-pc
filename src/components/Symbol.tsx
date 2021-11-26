import React from "react";
import classNames from "classnames";

export const SymbolWYY = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico wyy", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M627.086095 5.11496c28.131779-7.67194 58.821538-7.67194 86.953317 0 33.246739 7.67194 63.936497 23.016819 89.511296 43.476658 10.22992 7.67294 17.901859 15.344879 23.016819 28.131779 7.67294 17.902859 5.11496 38.362698-5.11496 53.707578-7.67194 12.786899-23.016819 23.016819-40.919678 25.573799-12.786899 2.55798-25.573799 0-38.361698-7.67194-5.11496-2.55798-10.22992-10.22992-17.90186-12.7869-17.901859-10.22992-35.804719-20.459839-56.264557-17.902859-15.344879 0-28.131779 7.67294-35.803719 17.902859-10.22992 10.22992-12.787899 23.016819-10.22992 35.803719 7.67194 25.574799 12.786899 53.706578 20.45984 79.281377 51.149598 2.55798 99.740216 15.344879 143.217874 40.919678 40.919678 25.574799 79.280377 58.821538 109.970135 97.183236 25.574799 33.246739 46.034638 71.609437 56.264558 112.529115 12.786899 43.476658 17.901859 89.510296 12.786899 132.986955-2.55698 38.362698-10.22992 74.166417-23.016819 109.971135-33.246739 84.396337-92.069276 161.119733-171.349653 209.712352-56.264558 35.803719-122.759035 58.821538-189.252512 66.493477-46.034638 5.11496-92.069276 5.11496-138.102914-2.55698-94.626256-15.344879-181.579573-61.379517-250.63103-130.430974-66.494477-66.493477-112.529115-153.447794-132.988954-245.51607-7.67194-69.051457-7.67194-138.102914 7.672939-207.154372 17.902859-81.839357 61.379517-161.119733 117.643075-222.499251 48.592618-51.149598 107.414156-89.511296 171.350653-117.643075 7.67194-2.55798 12.786899-5.11496 20.45984-7.67294 15.343879-2.55698 30.689759 0 43.476658 10.22992 17.901859 12.787899 25.573799 33.247739 23.016819 53.706578-2.55698 20.459839-17.901859 38.362698-35.804719 46.034638-63.936497 25.574799-122.758035 69.051457-163.677713 122.759035-38.361698 53.705578-63.936497 112.527115-71.608437 173.906633-7.67194 61.379517 0 122.758035 20.459839 181.579572 30.689759 84.396337 94.626256 156.004774 173.907633 196.924452 48.591618 25.574799 102.298196 38.361698 156.004774 38.361699 43.476658 0 89.511296-7.67194 130.429974-23.016819 35.804719-12.786899 71.609437-33.246739 99.741216-58.821538 28.132779-23.016819 51.149598-53.706578 66.494477-84.396337 7.67194-15.344879 17.901859-33.246739 20.45984-51.149597 15.344879-51.149598 17.901859-107.413156 2.556979-158.561754-12.786899-43.477658-38.361698-81.839357-71.609437-109.971135-15.343879-12.786899-30.689759-25.574799-48.591618-35.804719-15.343879-7.67194-30.689759-15.344879-48.591618-17.901859 12.787899 46.033638 23.017819 92.069276 35.804719 135.544934 2.55798 10.22992 5.11496 23.017819 5.11496 33.247739 2.55798 46.033638-15.344879 94.625256-46.034638 130.429974-28.131779 33.246739-69.051457 58.821538-112.528116 66.494478-46.033638 10.22992-97.183236 0-138.102914-25.574799-38.361698-25.574799-66.493477-63.936497-81.839357-104.856176-7.67194-23.016819-12.786899-48.591618-12.786899-74.166417-2.55698-56.263558 12.787899-109.971135 43.477658-156.004773 35.803719-53.706578 94.625256-92.069276 158.561753-109.971136-5.11496-17.901859-10.22992-35.804719-12.786899-53.706578-12.786899-38.361698-10.22992-81.839357 7.67194-115.086095 10.22992-20.459839 23.017819-38.361698 40.919678-51.149598 23.016819-20.459839 43.476658-33.246739 66.494477-40.918678M478.753261 419.423703c-17.902859 17.901859-28.132779 40.919678-33.247738 63.936497-5.11396 20.459839-5.11396 43.476658 0 66.494477 5.11496 23.016819 17.902859 46.033638 38.362698 61.379518 15.344879 10.22892 35.803719 15.343879 56.263558 10.228919 35.804719-5.11496 63.936497-38.361698 63.936497-74.166416-2.55698-7.67194-2.55698-17.901859-5.11496-25.574799-12.786899-48.591618-25.573799-99.741216-38.361698-148.332834-30.689759 7.67294-58.821538 23.017819-81.839357 46.034638z" />
    </svg>
  </span>
);

export const SymbolSX = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico sx", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M830.192659 154.032419 193.806382 154.032419c-65.893633 0-119.322846 53.428255-119.322846 119.322846l0 477.289468c0 65.897468 53.428255 119.322846 119.322846 119.322846L830.192659 869.967581c65.897468 0 119.322846-53.424419 119.322846-119.322846L949.515506 273.355266C949.515506 207.461633 896.090127 154.032419 830.192659 154.032419zM830.192659 233.581303c4.593618 0 9.012734 0.77567 13.109693 2.21579L512 500.843386 180.697648 235.796135c4.100794-1.44012 8.516075-2.21579 13.109693-2.21579L830.192659 233.580345zM830.192659 790.418697 193.806382 790.418697c-21.963266 0-39.773963-17.806861-39.773963-39.773963L154.032419 316.335461l333.116404 266.495041c7.266757 5.815131 16.053213 8.718382 24.851176 8.718382 8.797963 0 17.584419-2.903251 24.851176-8.718382l333.116404-266.495041 0 434.309273C869.966622 772.611835 852.155925 790.418697 830.192659 790.418697z" />
    </svg>
  </span>
);

export const SymbolWX = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico wx", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1280 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M866.4064 309.76c14.6944 0 29.184 1.1264 43.776 2.6624C870.912 133.2224 675.84 0 453.0176 0 203.9808 0 0 166.656 0 378.368c0 122.112 67.84 222.464 181.248 300.3904l-45.2608 133.7856 158.4128-77.9264c56.6272 10.9056 102.0928 22.2208 158.6176 22.2208 14.2848 0 28.3648-0.6144 42.24-1.6384a327.7824 327.7824 0 0 1-13.9776-93.3376c0.1024-194.3552 169.984-352.1024 385.1264-352.1024z m-243.5072-120.576c34.2016 0 56.6784 22.0672 56.6784 55.5008 0 33.3312-22.4768 55.6544-56.6784 55.6544-33.8944 0-67.9424-22.3232-67.9424-55.6544 0-33.536 33.9968-55.5008 67.9424-55.5008z m-317.0304 111.104c-34.048 0-68.3008-22.272-68.3008-55.6032 0-33.4336 34.304-55.5008 68.3008-55.5008 33.9456 0 56.5248 22.016 56.5248 55.5008 0 33.3312-22.528 55.6544-56.5248 55.6544zM1280 656.5888c0-177.8688-181.248-322.816-384.8704-322.816-215.6032 0-385.28 144.9984-385.28 322.816 0 178.3296 169.728 322.7648 385.28 322.7648 45.1072 0 90.624-11.0592 135.8848-22.2208L1155.2768 1024l-34.0992-111.2064C1212.16 845.7216 1280 756.8384 1280 656.5376z m-509.8496-55.7056c-22.4768 0-45.2608-22.016-45.2608-44.4928 0-22.1184 22.784-44.4416 45.2608-44.4416 34.4064 0 56.7296 22.3232 56.7296 44.4416 0 22.528-22.3232 44.4928-56.7296 44.4928z m249.1904 0c-22.3232 0-45.056-22.016-45.056-44.4928 0-22.1184 22.6816-44.4416 45.056-44.4416 34.0992 0 56.7296 22.3232 56.7296 44.4416 0 22.528-22.6304 44.4928-56.7296 44.4928z" />
    </svg>
  </span>
);

// export const SymbolQQ = <div>qq</div>;
export const SymbolQQ = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico qq", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M818.355102 380.00336h-0.511996c0-3.071975 0.511996-6.143951 0.511996-9.215926C818.355102 166.19387 681.140199 0 511.823154 0 342.608508 0.511996 205.393605 166.19387 205.393605 371.29943c0 3.071975 0.511996 6.143951 0.511996 9.215926h-0.511996C204.472013 436.834905 137.554148 548.75721 119.890289 598.369613c-17.715058 49.612403-22.015824 99.224806-13.823889 139.109287 8.089535 39.423685 14.796682 63.948288 22.425421 71.628227 7.679939 7.679939 14.847881 16.383869 37.785297-1.535988 18.585451-16.383869 38.70689-49.612403 38.706891-49.612403s16.742266 51.660387 54.015568 91.544868c-29.183767 14.847881-71.730626 47.564419-74.597804 69.580243-2.867177 21.401429 44.441244 102.757578 155.851554 104.856761 111.359109 1.535988 148.171615-49.612403 152.062783-53.70837 10.444716-11.775906 19.097447-18.943848 19.097447-18.943848s9.062328 7.167943 19.097447 18.943848c3.839969 4.095967 40.652475 55.756354 152.062784 53.70837 111.359109-2.047984 158.71873-83.352933 155.800354-104.856761-2.969576-21.503828-45.414037-54.732362-74.597804-69.580243 37.324501-39.372485 54.015568-91.544868 54.015568-91.544868s20.01904 33.228534 38.706891 49.612403c22.937417 17.407861 30.105359 9.215926 37.785297 1.535988 7.679939-7.679939 14.335885-32.255742 22.425421-71.628227 9.164727-39.935681 4.351965-90.00888-12.851097-139.621283-17.203062-49.663603-84.581723-161.637107-85.503316-217.854257z" />
    </svg>
  </span>
);

export const SymbolQZ = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico qz", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1077 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M1077.637859 390.464902c-9.970463-28.510136-372.194702-53.948291-372.194702-53.948291S571.461688 0 538.963367 0c-32.336638 0-166.425896 336.516611-166.425897 336.516611S11.876169 361.846978 0.342768 390.464902c-11.479506 28.617925 269.364193 261.926767 269.364194 261.926767s-82.943476 354.355657-63.595388 369.877243c19.401983 15.521586 332.851793-174.617845 332.851793-174.617845s311.132351 196.714547 332.959581 174.617845c16.006636-16.276108-27.054987-215.362008-50.337366-316.090635-0.754522-3.233664-121.693547 13.473599-255.728911 14.335909-119.052722 0.808416-251.848515-7.275744-251.848515-7.275743l310.000568-230.182968s-96.363181-17.569573-169.497877-24.144689c-104.555129-9.431519-196.175603-9.215942-184.857779-12.126239 18.162412-4.527129 145.245398-16.437791 269.364193-12.072345 113.339916 4.04208 225.44026 24.14469 225.44026 24.144689l-309.946674 220.535871s67.691362 10.401619 123.849323 12.557394c107.088166 4.095974 237.674288 1.131782 237.404817 0a625.06721 625.06721 0 0 1-7.437427-39.504592s279.280762-233.470525 269.310299-261.926767z" />
    </svg>
  </span>
);

export const SymbolWB = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico wb", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1293 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M956.249194 498.742142c-50.31952-9.796721-26.273024-36.960355-26.273023-36.960355s48.983603-81.045598-9.796721-139.380616c-73.030099-72.584794-250.261682 9.796721-250.261682 9.79672-66.795823 20.038747-48.983603-9.796721-39.632188-61.897462 0-60.561546-21.374663-164.317724-202.16869-102.420261-179.45811 60.561546-333.979113 276.0894-333.979113 276.0894-107.763927 142.94306-93.514152 252.042904-93.514152 252.042904 26.273024 244.027405 287.222037 310.823228 489.836033 325.963615 212.856022 16.921608 500.523364-72.584794 587.803239-256.941265s-71.694183-256.941264-122.013703-266.29268zM506.04535 954.289653c-211.965411 9.351415-383.408022-96.185985-383.408022-236.902518s171.442611-252.042904 383.408022-261.394319 382.962717 76.147238 382.962716 216.418465-170.997306 272.526956-382.962716 281.878372z m-41.858716-407.009213a200.387468 200.387468 0 0 0-189.254831 223.988659 110.480291 110.480291 0 0 0 57.444408 93.959457 249.371071 249.371071 0 0 0 317.057505-56.108491c65.014601-83.272126 27.60894-285.440815-185.247082-261.839625z m-53.881963 278.315928a57.889713 57.889713 0 0 1-72.139489-50.764825 75.701932 75.701932 0 0 1 68.577045-71.694183 60.695138 60.695138 0 0 1 75.256627 54.772574 76.369891 76.369891 0 0 1-71.694183 67.686434z m125.576146-105.5374a25.248821 25.248821 0 0 1-36.960355-3.562444 30.503426 30.503426 0 0 1 8.015499-40.522799 25.783188 25.783188 0 0 1 39.632188 3.562444 34.466644 34.466644 0 0 1-10.687332 40.522799z m524.569861-306.815479a34.778358 34.778358 0 0 0 33.397911-29.835467 30.681548 30.681548 0 0 1 1.335917-3.562444c24.937107-232.004157-191.481358-191.481358-191.481359-191.481358a34.1104 34.1104 0 0 0-34.733827 34.288522 34.511175 34.511175 0 0 0 34.733827 34.733828C1059.114761 222.652742 1024.380934 378.509662 1024.380934 378.509662a35.090072 35.090072 0 0 0 36.069744 34.733827zM1034.177654 8.460804a414.802059 414.802059 0 0 0-173.669139 1.781222c-1.335916 0-3.562444 0.890611-4.89836 0.890611s-1.335916 0.890611-1.335916 0.890611a51.566375 51.566375 0 0 0-36.960356 48.983603 50.453111 50.453111 0 0 0 50.31952 49.874215 258.277181 258.277181 0 0 0 46.757076-10.687332 269.766062 269.766062 0 0 1 251.152293 123.794925 227.818286 227.818286 0 0 1 15.585692 167.434862 138.0447 138.0447 0 0 0-10.687332 48.983603 47.959401 47.959401 0 0 0 51.655437 46.31177 37.940027 37.940027 0 0 0 47.647686-41.858715h1.335917C1353.906992 151.403865 1169.105216 39.632188 1034.177654 8.460804z" />
    </svg>
  </span>
);

export const SymbolWY = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico wy", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M378.592157 65.151634c-53.47451 10.888889-65.44183 19.622222-65.44183 52.288889 0 27.275817 1.078431 27.275817 57.786928 19.622222 76.330719-11.96732 268.342484-7.654902 302.087582 6.576471 38.164706 14.231373 53.47451 42.585621 61.129412 111.261438 8.733333 76.330719-15.309804 105.763399-85.062745 105.763399-26.198693 1.078431-103.606536 3.233987-174.546405 5.498039-159.237908 5.498039-165.814379 0-167.969935-119.994771-1.078431-43.664052-4.312418-83.985621-8.733333-91.639216-11.96732-19.622222-47.976471-14.122876-61.129412 8.733333-11.96732 24.04183-14.231373 127.648366-2.156863 186.513725 13.045752 68.675817 37.087582 90.562092 105.763399 95.952941 51.210458 4.312418 58.865359 7.654902 46.898039 20.699346-30.511111 37.087582-136.381699 79.673203-200.637908 79.673203-51.318954 0-75.252288 20.699346-64.363399 54.552941 10.888889 34.930719 80.750327 30.511111 206.135948-14.122876 41.4-15.309804 134.117647-88.405229 157.081046-125.384314 18.543791-28.354248 20.699346-29.43268 127.648366-28.354248 133.039216 1.078431 174.546405-11.96732 196.32549-65.44183 19.622222-46.898039 20.699346-77.40915 4.419608-145.006536C786.444444 108.70719 771.24183 92.427451 678.524183 68.385621 629.362092 55.341176 437.457516 53.184314 378.592157 65.151634L378.592157 65.151634zM376.328105 226.545098c-5.498039 7.654902-8.733333 21.777778-6.576471 32.666667 3.233987 17.465359 17.465359 19.622222 139.615686 19.622222l136.381699-1.078431 3.233987-29.43268c4.312418-34.930719 11.96732-32.666667-142.85098-33.852288C425.490196 213.500654 383.983007 217.813072 376.328105 226.545098L376.328105 226.545098 376.328105 226.545098zM565.10719 459.95817c-19.622222 7.654902-24.04183 16.386928-19.622222 37.087582 4.312418 25.120261-7.654902 36.00915-116.759477 107.918954-76.330719 51.318954-145.006536 87.219608-186.513725 99.294118-121.071895 34.930719-143.928105 52.396078-114.495425 87.219608 45.819608 54.552941 248.721569-47.976471 466.823529-236.645752 46.898039-40.321569 88.298039-38.164706 109.105882 4.312418 10.888889 24.04183 21.777778 30.511111 50.132026 30.511111 78.486275 0 102.529412 90.562092 45.819608 173.469281-56.708497 81.828758-154.92549 118.91634-223.601307 83.985621-30.511111-16.386928-34.930719-16.386928-40.321569-1.078431-8.733333 20.699346 13.045752 74.173856 40.321569 99.294118 41.4 37.087582 163.550327-1.078431 250.877124-79.564706 55.630065-50.132026 74.173856-85.062745 79.564706-152.661438 9.810458-122.150327-83.985621-235.568627-209.369935-249.8-28.354248-3.233987-63.284967-7.654902-78.486275-8.733333C603.271895 452.303268 579.230065 454.458824 565.10719 459.95817L565.10719 459.95817 565.10719 459.95817zM610.818301 653.048366c-147.163399 116.652288-271.577778 186.406536-392.649673 219.180392-70.939869 19.622222-75.252288 88.298039-5.498039 88.298039 42.585621 0 164.735948-52.396078 231.256209-99.294118 33.745098-24.04183 69.754248-42.585621 79.564706-42.585621s18.543791-6.576471 18.543791-14.231373c0-8.732026 28.354248-39.243137 62.207843-68.675817 101.45098-87.219608 104.684967-90.562092 89.48366-109.105882C676.260131 604.964706 669.792157 607.228758 610.818301 653.048366L610.818301 653.048366z" />
    </svg>
  </span>
);

export const SymbolLJ = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico lj", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M448.884364 457.355636a46.545455 46.545455 0 0 0-62.464 20.759273 232.773818 232.773818 0 0 0 43.566545 268.8l168.029091 168.029091a232.727273 232.727273 0 1 0 329.122909-329.122909l-113.477818-113.477818a46.545455 46.545455 0 1 0-65.815273 65.815272L861.323636 651.636364a139.636364 139.636364 0 0 1-197.492363 197.492363l-168.029091-168.029091a139.729455 139.729455 0 0 1-26.158546-161.28 46.545455 46.545455 0 0 0-20.759272-62.464zM433.338182 101.701818a232.727273 232.727273 0 1 0-329.122909 329.076364l113.477818 113.524363A46.545455 46.545455 0 1 0 283.461818 478.487273L169.984 364.916364A139.636364 139.636364 0 0 1 367.476364 167.563636l168.029091 168.029091c42.821818 42.821818 52.829091 107.938909 26.158545 161.233455a46.545455 46.545455 0 0 0 83.223273 41.704727 232.773818 232.773818 0 0 0-43.566546-268.8z" />
    </svg>
  </span>
);

export const SymbolPhone = ({ size = 40, hover = false, active = false }) => (
  <span
    className={classNames("ui_threes_ico phone", { hover, active })}
    style={{ "--size": size }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="100%"
      height="100%"
      className="fill-current"
    >
      <path d="M718.528 0H304.832C242.496 0 192 52.864 192 117.952V904.32c0 65.152 50.56 117.952 112.832 117.952h413.696c62.336 0 112.832-52.8 112.832-117.952V117.952C831.36 52.864 780.864 0 718.528 0z m-244.48 39.296h75.264a19.2 19.2 0 0 1 18.816 19.712 19.2 19.2 0 0 1-18.816 19.648H474.112a19.2 19.2 0 0 1-18.816-19.648 19.2 19.2 0 0 1 18.816-19.712z m37.632 934.976c-26.56 0-48.064-22.528-48.064-50.304 0-27.712 21.504-50.24 48.064-50.24s48.064 22.528 48.064 50.24c0 27.776-21.504 50.304-48 50.304z m244.48-168.256a19.2 19.2 0 0 1-18.816 19.648H286.08a19.2 19.2 0 0 1-18.816-19.648V137.6a19.2 19.2 0 0 1 18.816-19.648h451.328a19.2 19.2 0 0 1 18.816 19.648v668.416z" />
    </svg>
  </span>
);

export const SymbolToday = () => (
  <svg
    viewBox="0 0 1024 1024"
    width="100%"
    height="100%"
    className="fill-current"
  >
    <path d="M863.7876 140.568503l-40.424688 0 0-12.006452c0-36.002982-29.319769-65.436338-65.146743-65.436338l-0.959861 0c-35.830043 0-65.145719 29.434379-65.145719 65.436338l0 12.006452L331.830059 140.568503l0-12.006452c0-36.002982-29.312606-65.436338-65.142649-65.436338l-0.991584 0c-35.831067 0-65.147766 29.434379-65.147766 65.436338l0 12.006452-40.333614 0c-35.831067 0-65.147766 29.463032-65.147766 65.413825l0 625.571638c0 36.004005 29.315676 65.436338 65.147766 65.436338l703.573153 0c35.827997 0 65.143673-29.433356 65.143673-65.436338L928.931273 205.983351C928.931273 170.031535 899.615597 140.568503 863.7876 140.568503L863.7876 140.568503 863.7876 140.568503zM718.168058 128.562051c0-21.639856 17.507746-39.260166 39.086204-39.260166l0.961908 0c21.548782 0 39.083134 17.620309 39.083134 39.260166l0 116.390847c0 21.63474-17.535375 39.259142-39.083134 39.259142l-0.961908 0c-21.578458 0-39.086204-17.624403-39.086204-39.259142L718.168058 128.562051 718.168058 128.562051 718.168058 128.562051zM226.610646 128.562051c0-21.639856 17.505699-39.260166 39.090297-39.260166l0.986467 0c21.524223 0 39.084157 17.620309 39.084157 39.260166l0 116.390847c0 21.63474-17.565051 39.259142-39.084157 39.259142l-0.986467 0c-21.584598 0-39.090297-17.624403-39.090297-39.259142L226.610646 128.562051 226.610646 128.562051 226.610646 128.562051zM863.7876 844.668659 160.214447 844.668659c-7.065929 0-13.030781-6.075369-13.030781-13.113669L147.183665 371.605459l729.637786 0 0 459.94953C876.815311 838.59329 870.855576 844.668659 863.7876 844.668659L863.7876 844.668659 863.7876 844.668659zM661.76649 702.842513" />
    <text
      textAnchor="middle"
      dominantBaseline="middle"
      x="1.1em"
      y="1.4em"
      fontSize="450"
      fontWeight="bold"
    >
      {new Date().getDate()}
    </text>
  </svg>
);

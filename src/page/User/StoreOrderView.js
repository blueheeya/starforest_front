// import React, { useContext, useEffect, useState } from "react";

// import { useNavigate, useParams } from "react-router-dom";
// import Icon from "../../components/Icon/Icon";
// // import ModalContext from "../../components/Modal/ModalContext";
// import { ModalContext } from "../../components/Modal/ModalContext";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const host = `${process.env.REACT_APP_SERVER_URL}`;

// function StoreOrderView(modal) {
//   const { productId } = useParams(); // URL에서 주문 ID를 가져옴
//   const [quantity, setQuantity] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
//   const [product, setProduct] = useState(null); //상품 상태
//   const [user, setUser] = useState(null); //유저 상태
//   const { modalOpen } = useContext(ModalContext); //모달
//   const navigate = useNavigate();
//   const userEmail = useSelector((state) => {
//     return state.loginSlice.email;
//   });

//   //넘겨줄거
//   //userEmail, productId, content,
//   useEffect(() => {
//     fetchProductData();
//   }, [productId]);

//   //상품데이터요청
//   const fetchProductData = async () => {
//     const body = { productId, userEmail, content };
//     try {
//       const res = await axios.get(`${host}store/order/view}`, body);

//       // const data = {
//       //   productid: product.productId,
//       //   userid: product.userEmail,
//       // };
//       setProduct(res.data.product);
//       setUser(res.data.userEmail);
//     } catch (error) {
//       console.error("Error fetching product", error);
//     }
//   };

//   const handleReviewButtonClick = () => {
//     if (product && user) {
//       modalOpen(0, {
//         onSubmit: handleReviewSubmit,
//         productId: product.product_id,
//         useEmail: user.email,
//       });
//     }
//   };

//   const handleReviewSubmit = (reviewContent) => {
//     setIsReviewSubmitted(true);
//     setIsModalOpen(false);
//     try {
//       //리뷰제출
//       const reviewData = {
//         content: product.content,
//         productId: product.id,
//         userEmail: user.email,
//       };
//       axios.post(`${host}store/review`, reviewData);
//     } catch (error) {
//       console.error("Error fetching review", error);
//     }
//     navigate("/user/store/review/list", {
//       state: { newReview: reviewContent },
//     });
//   };

//   return (
//     <>
//       <div className="OrderViewBox">
//         <div className="OrderViewInner">
//           <div className="OrderViewDateWrap">
//             <div className="userOrderDate">2024.06.24</div>
//             <div className="OrderViewNum">주문번호 : bkbh12345</div>
//           </div>
//         </div>
//         <div className="OrderViewTitle">
//           <div className="OrderViewProductWrap">
//             <div className="OrderViewProduct1">
//               <span className="OrderViewTitle ">[나이키] </span>
//               <span className="OrderViewinnerEx"> 배송상품</span>
//             </div>
//             <div className="OrderViewReviewState">
//               {isReviewSubmitted ? (
//                 <button
//                   className="OrderViewState1 orderReviewCompleteBtn"
//                   disabled
//                 >
//                   <Icon iconName="iconReviewComplete" />
//                   리뷰 작성 완료
//                 </button>
//               ) : (
//                 <>
//                   <button
//                     className="OrderViewState2 orderReviewWriteBtn"
//                     onClick={handleReviewButtonClick}
//                   >
//                     <Icon iconName="iconReviewWrite" />
//                     리뷰 작성하기
//                     <Icon iconName="iconGo" />
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="OrderViewProduct">
//             <div className="OrderViewinnerMain">
//               <div className="oderViewImg">
//                 {/* <img src="../../" alt="" /> */}
//                 <img src={product.imageUrl} alt={product.name} />
//               </div>
//               <div className="OrderViewinnerMainContent">
//                 {/* <div className="OrderViewcontentName">나이키</div>
//                 <div className="OrderViewcontentBrand">블루샤크</div> */}
//                 <div className="OrderViewcontentName">{product.name}</div>
//                 <div className="OrderViewcontentBrand">{product.brand}</div>
//               </div>
//             </div>
//             <div className="OrderViewStateBox">주문완료</div>
//           </div>
//           <div className="OrderViewPriceWrap">
//             <div className="OrderViewNum">
//               <div>총수량 :</div>
//               <div>{quantity}</div>
//             </div>
//             <div className="OrderViewPrice">
//               {/* <div className="OrderViewpriceSpan">30,000원</div>
//               <div className="OrderViewpriceMain">10,000원</div> */}
//               <div className="OrderViewpriceSpan">{product.totalPrice}원</div>
//               <div className="OrderViewpriceMain">{product.unitPrice}원</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="OrderViewTotalWrap">
//         <div className="OrderViewTotalcontent">
//           <div className="OrderViewTotalTitle">총 주문 금액</div>
//           {/* <div className="OrderViewPrice">10,000원</div> */}
//           <div className="OrderViewPrice">{product.totalPrice}원</div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default StoreOrderView;

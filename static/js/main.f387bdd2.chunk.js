(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(39),r=c.n(n),o=(c(46),c(47),c(12)),i=(c(48),c(30)),l=c(4),j=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],n=[{image:"https://media.glamour.com/photos/5de95e1f8b03ef0008cfe0b1/master/w_2560%2Cc_limit/BookSplit_Social_Lede.jpg"},{image:"https://hips.hearstapps.com/esq.h-cdn.co/assets/17/31/1501768255-best-books-of-2017.jpg"},{image:"https://api.time.com/wp-content/uploads/2018/09/harry-potter-books-featured-image.jpg?quality=85&w=1200&h=628&crop=1"},{image:"https://assets.penguinrandomhouse.com/wp-content/uploads/2018/03/05105825/1200x628_instagrammable.jpg"}],r=function(){s(c===n.length-1?0:c+1)};return Object(a.useEffect)((function(){var e=setInterval(r,5e3);return function(){return clearInterval(e)}})),Object(l.jsxs)("section",{className:"img-carousel",children:[Object(l.jsx)(i.a,{className:"left-arrow",onClick:function(){s(0===c?n.length-1:c-1)}}),n.map((function(e,t){return Object(l.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(l.jsx)("img",{src:e.image,alt:"Books",className:"image"})},e+t)})),Object(l.jsx)(i.b,{className:"right-arrow",onClick:r})]})},u=(c(50),c.p+"static/media/card-1.b5f82111.svg"),b=c.p+"static/media/card-2.6c5a0a3b.svg",d=c.p+"static/media/card-3.09123f67.svg",h=c(13),m=c(1),O=c.n(m),p=c(2),x=Object(a.createContext)(),f=function(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(!0),i=Object(o.a)(r,2),j=i[0],u=i[1],b=function(){var e=Object(p.a)(O.a.mark((function e(t){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&maxResults=25"));case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,n(a.items),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.stack);case 14:return e.prev=14,setTimeout((function(){u(!1)}),1500),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),d={books:s,setBooks:n,loading:j,setLoading:u,getBookData:b};return Object(l.jsx)(x.Provider,{value:d,children:e.children})},g=function(){var e=Object(a.useContext)(x),t=e.books,c=e.getBookData,s=Object(h.f)();return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h2",{className:"center-text",children:"What Books Do We Sell?"}),Object(l.jsxs)("div",{className:"card-wrapper",children:[Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:u,alt:"Two Books"}),Object(l.jsx)("p",{children:"blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"})]}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:b,alt:"Open Book"}),Object(l.jsx)("p",{children:"Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"})]}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:d,alt:"Book"}),Object(l.jsx)("p",{children:"Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"})]})]}),Object(l.jsx)("button",{className:"shop-now-btn",onClick:function(){Array.isArray(t)||c("programming"),s("/all-books")},children:"Shop Now"})]})},v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(g,{})]})},N=(c(52),function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"header-wrapper",children:[Object(l.jsx)("img",{className:"bookcase",src:"https://cdn.pixabay.com/photo/2012/11/23/06/11/book-67049_1280.jpg",alt:"Bookcase"}),Object(l.jsxs)("div",{className:"text-wrapper",children:[Object(l.jsx)("h2",{className:"header-text",children:"Our Story"}),Object(l.jsx)("p",{children:"blah blah blah"})]})]})})}),k=c(16),w=(c(53),c(40)),B=c(28),y=c(18),C=Object(w.a)({apiKey:"AIzaSyAwrQsBfniIjbdTY1wGqiAEe5swhss924g",authDomain:"bookbarn-production.firebaseapp.com",projectId:"bookbarn-production",storageBucket:"bookbarn-production.appspot.com",messagingSenderId:"116770101774",appId:"1:116770101774:web:9577e5b7187bd66d81fa5f"}),A=Object(y.e)(C),S=Object(B.b)(C),I=Object(a.createContext)(),E=function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),s=c[0],n=c[1];Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(y.b)(A,"users",S.currentUser.uid),e.next=3,Object(y.c)(t);case 3:return c=e.sent,e.abrupt("return",n(c.data().cart));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();S.onAuthStateChanged((function(t){t&&e()}))}),[]);var r={cart:s,setCart:n};return Object(l.jsx)(I.Provider,{value:r,children:e.children})},_=function(e){var t=e.image,c=e.title,s=e.author,n=(e.published,e.price),r=Object(a.useContext)(I),o=r.cart,i=r.setCart;return Object(l.jsxs)("div",{className:"bookcard-wrapper",children:[Object(l.jsx)("img",{className:"bookcard-image",src:"no-img"===t?c:t,alt:c}),Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h2",{className:"bookcard-title",children:c}),Object(l.jsxs)("h3",{className:"bookcard-author",children:["by ",s]}),Object(l.jsx)("h3",{className:"price",children:n=0===n?"Free":Number.isInteger(n)?"$"+(n-1+.99):"$"+n}),Object(l.jsx)("button",{className:"add-to-cart-btn",onClick:function(){return e=c,a=t,s=n,void(o.some((function(t){return t.title===e}))?o.forEach((function(t){t.title===e&&t.quantity++})):i([].concat(Object(k.a)(o),[{title:e,image:a,price:s,quantity:1}])));var e,a,s},children:"ADD TO CART"})]})]})},D=(c(54),c(27)),q=c.n(D),F=function(e){var t=e.books,c=e.loading,s=(e.setloading,Object(a.useContext)(I).cart),n=Object(a.useCallback)((function(){S.onAuthStateChanged(function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,Object(y.g)(Object(y.b)(A,"users",S.currentUser.uid),{cart:s});case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[s]);return Object(a.useEffect)((function(){n()}),[n]),Object(l.jsxs)(l.Fragment,{children:[c&&!Array.isArray(t)&&Object(l.jsx)("div",{className:"test",children:Object(l.jsxs)("div",{className:"bookshelf_wrapper",children:[Object(l.jsxs)("ul",{className:"books_list",children:[Object(l.jsx)("li",{className:"book_item first"}),Object(l.jsx)("li",{className:"book_item second"}),Object(l.jsx)("li",{className:"book_item third"}),Object(l.jsx)("li",{className:"book_item fourth"}),Object(l.jsx)("li",{className:"book_item fifth"}),Object(l.jsx)("li",{className:"book_item sixth"})]}),Object(l.jsx)("div",{className:"shelf"})]})}),void 0===t&&Object(l.jsx)("p",{className:"not-found",children:" Sorry!, we couldn't find that book :( "}),Object(l.jsx)("div",{className:"book-list",children:!c&&Array.isArray(t)&&t.map((function(e){return Object(l.jsx)(_,{image:void 0===e.volumeInfo.imageLinks?"no-img":e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors,published:e.volumeInfo.publishedDate,price:void 0===e.saleInfo.listPrice?19.99:e.saleInfo.listPrice.amount},q()())}))})]})},P=function(){var e=Object(a.useContext)(x),t=e.books,c=e.loading,s=e.getBookData,n=e.setLoading;return Array.isArray(t)||void 0===t||s("programming"),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(l.jsxs)("div",{children:[c&&Object(l.jsx)("div",{className:"test",children:Object(l.jsxs)("div",{className:"bookshelf_wrapper",children:[Object(l.jsxs)("ul",{className:"books_list",children:[Object(l.jsx)("li",{className:"book_item first"}),Object(l.jsx)("li",{className:"book_item second"}),Object(l.jsx)("li",{className:"book_item third"}),Object(l.jsx)("li",{className:"book_item fourth"}),Object(l.jsx)("li",{className:"book_item fifth"}),Object(l.jsx)("li",{className:"book_item sixth"})]}),Object(l.jsx)("div",{className:"shelf"})]})}),!c&&Object(l.jsx)(F,{books:t,loading:c,setloading:n})]})},L=(c(55),c.p+"static/media/logo.0b451b70.svg"),R=c.p+"static/media/shoppingCart.c15f1e05.svg",U=(c(56),c.p+"static/media/modal.1f383f71.svg"),T=function(e){var t=e.setHidden,c=e.books,s=e.cart,n=e.setCart,r=e.getBookData,i=Object(h.f)(),j=Object(a.useState)(0),u=Object(o.a)(j,2),b=u[0],d=u[1],m=function(){document.body.classList.remove("modal-open"),t(!0)},x=Object(a.useCallback)(Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.onAuthStateChanged(function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,Object(y.g)(Object(y.b)(A,"users",S.currentUser.uid),{cart:s});case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),[s]),f=Object(a.useCallback)((function(){for(var e=0,t=0;t<s.length;t++)"Free"===s[t].price&&(s[t].price=0),isNaN(s[t].price)&&(s[t].price=parseFloat(s[t].price.substring(1))),e+=s[t].quantity*s[t].price;d(e.toFixed(2))}),[s]);return Object(a.useEffect)((function(){f(),x()}),[f,x]),Object(l.jsxs)("div",{className:"modal",children:[0===s.length&&Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)("p",{className:"modal-title",children:"Cart"}),Object(l.jsx)("div",{className:"close",onClick:m}),Object(l.jsxs)("div",{className:"empty-cart",children:[Object(l.jsx)("img",{src:U,className:"modal-img",alt:"happy book"}),Object(l.jsx)("p",{children:"Your cart is empty"}),Object(l.jsx)("button",{className:"shop-books-btn",onClick:function(){Array.isArray(c)||r("programming"),i("/all-books"),m()},children:"Shop Books"})]})]}),0!==s.length&&Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsxs)("p",{className:"modal-title",children:["Cart ( ",s.length,")"]}),Object(l.jsx)("div",{className:"close",onClick:m}),Object(l.jsx)("div",{className:"cartInfo",children:s.map((function(e,t){return Object(l.jsxs)("div",{className:"bookInfo",children:[Object(l.jsx)("img",{className:"bookCartImage",src:e.image,alt:e.title},q()()),Object(l.jsxs)("div",{className:"bookCartInfo",children:[Object(l.jsx)("p",{children:e.title}),Object(l.jsxs)("p",{children:[" ",0===e.price?"Free":"$"+e.price]}),Object(l.jsxs)("div",{className:"quantity-container",children:[Object(l.jsx)("button",{className:"decrement",onClick:function(){return function(e){var t=Object(k.a)(s);t.forEach((function(c){if(c.title===e)if(1===c.quantity){var a=t.findIndex((function(t){return t.title===e}));t.splice(a,1)}else c.quantity--})),n(t)}(e.title)},children:"-"}),Object(l.jsx)("span",{className:"quantity",children:e.quantity}),Object(l.jsx)("button",{className:"increment",onClick:function(){return function(e){var t=Object(k.a)(s);t.forEach((function(t){t.title===e&&t.quantity++})),n(t)}(e.title)},children:"+"})]}),Object(l.jsx)("button",{className:"removeCartBtn",type:"submit",onClick:function(){return function(e){var t=Object(k.a)(s);t=t.filter((function(t){return t!==e})),n(t)}(e)},children:"Remove"},t+e.title+e.image)]},q()())]},q()())}))}),Object(l.jsxs)("div",{className:"total",children:[Object(l.jsx)("p",{children:" Estimated Total: "}),Object(l.jsxs)("p",{children:[" ",0===b?"Free":"$"+b]})]}),Object(l.jsx)("div",{className:"checkOut-Container",children:Object(l.jsx)("button",{className:"checkOut",type:"submit",children:"CONTINUE TO CHECKOUT"})})]})]})},H=c(33),$=c(21),J=c.p+"static/media/searchBarImg.ecab0490.svg",W=function(e){var t=e.getBookData,c=Object(h.f)(),s=Object(a.useState)(""),n=Object(o.a)(s,2),r=n[0],i=n[1],j=function(e){if(e.preventDefault(),""===r)return t("programming");t(r),c("/all-books"),i("")};return Object(l.jsxs)("form",{onSubmit:j,className:"searchbar-wrapper",children:[Object(l.jsx)("img",{src:J,className:"searchbar-img",alt:"opened book with magnifying glass",onClick:j}),Object(l.jsx)("input",{name:"book",onChange:function(e){i(e.target.value)},type:"text",className:"searchbar",placeholder:"search",value:r})]})},K=s.a.createContext(),Q=function(){return Object(a.useContext)(K)},Y=function(e){var t=function(){var e=Object(p.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)(Object(y.a)(A,"users"));case 2:e.sent.forEach((function(e){t===e.data().username&&(console.log("".concat(e.id," => ").concat(e.data())),console.log(e.data().username))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=Object(a.useState)(),s=Object(o.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(!0),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(a.useState)(""),m=Object(o.a)(d,2),x=m[0],f=m[1],g=Object(h.f)();Object(a.useEffect)((function(){return S.onAuthStateChanged((function(e){r(e),b(!1)}))}),[]);var v={currentUser:n,login:function(e,c){Object(B.c)(S,e,c),t()},signup:function(e,t,c){Object(B.a)(S,e,t).then((function(){Object(B.d)(S.currentUser,{displayName:c}),Object(y.f)(Object(y.b)(A,"users",S.currentUser.uid),{cart:[]}),g("/")})).catch((function(e){switch(e.code){case"auth/email-already-in-use":f("Email address already in use.");break;case"auth/invalid-email":f("Email address is invalid.");break;case"auth/operation-not-allowed":f("Error during sign up.");break;case"auth/weak-password":f("Password is not strong enough. Password needs a minimum of 6 characters. Add additional characters including special characters and numbers.");break;default:f("Failed to create an account")}}))},logout:function(){S.signOut(),window.location.reload()},error:x,setError:f};return Object(l.jsx)(K.Provider,{value:v,children:!u&&e.children})},z=c(41),G=function(){var e=Object(a.useContext)(x),t=e.books,c=e.getBookData,s=Object(a.useContext)(I),n=s.cart,r=s.setCart,i=Object(a.useState)(!0),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(a.useState)(!0),m=Object(o.a)(d,2),O=m[0],p=m[1],f=Object(a.useState)(!1),g=Object(o.a)(f,2),v=g[0],N=g[1],k=Object(a.useRef)(null),w=Q(),B=w.logout,y=w.currentUser,C=Object(h.f)();return Object(a.useEffect)((function(){var e=!0;S.onAuthStateChanged((function(t){e&&N(!!t)}));var t=function(t){k.current&&!k.current.contains(t.target)&&e&&p(!0)};return document.addEventListener("mousedown",t),function(){e=!1,document.removeEventListener("mousedown",t)}}),[]),Object(l.jsxs)(l.Fragment,{children:[u?null:Object(l.jsx)(T,{setHidden:b,books:t,cart:n,setCart:r,getBookData:c}),Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)($.b,{to:"/",children:Object(l.jsxs)("div",{className:"logo-wrapper",children:[Object(l.jsx)("h1",{className:"title",children:"BookBarn"}),Object(l.jsx)("img",{src:L,className:"logo-img",alt:"3 books laying ontop of eachother"})]})}),Object(l.jsx)(W,{getBookData:c}),Object(l.jsx)("p",{className:"all-books",onClick:function(){Array.isArray(t)||c("programming"),C("/all-books")},children:"All Books"}),Object(l.jsx)($.c,{to:"/about-us",className:function(e){return e.isActive?"about-us active":"about-us"},children:Object(l.jsx)("p",{className:"about-us",children:"About Us"})}),Object(l.jsxs)("div",{ref:k,className:"dropdown",onClick:function(){p(!O)},children:[v&&Object(l.jsxs)("div",{className:"account-wrapper",children:[Object(l.jsx)(H.a,{className:"account"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"account-text",children:["Welcome",null===y?"not logged in: ":" "+y.displayName]}),Object(l.jsx)("p",{className:"account-text",children:Object(l.jsx)("strong",{children:"Account"})})]})]}),!v&&Object(l.jsx)(H.a,{className:"account"}),Object(l.jsxs)("div",{className:O?"dropdown-content":"dropdown-content show",children:[v&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("button",{className:"signout",onClick:function(){return B()},children:["Sign out",Object(l.jsx)(z.a,{className:"signout-img"})]})}),!v&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)($.b,{to:"/login",children:Object(l.jsx)("button",{className:"log-in",children:"Sign In"})}),Object(l.jsx)($.b,{to:"/createAccount",children:Object(l.jsx)("button",{className:"create-account",children:"Create an account"})})]})]})]}),Object(l.jsxs)("div",{className:"shoppingcart-container",onClick:function(){document.body.classList.add("modal-open"),b(!1)},children:[0===n.length&&Object(l.jsx)("img",{src:R,className:"shoppingcart",alt:"Shopping Cart"}),0!==n.length&&Object(l.jsxs)("div",{className:"shoppingcart-container",children:[Object(l.jsx)("span",{className:"nav-cart-items","data-count":n.length}),Object(l.jsx)("img",{src:R,className:"shoppingcart",alt:"Shopping Cart"})]})]})]})]})},M=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Q().login,s=Object(h.f)(),n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],j=r[1],u=Object(a.useState)(!1),b=Object(o.a)(u,2),d=b[0],m=b[1],x=function(){var a=Object(p.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,j(""),m(!0),a.next=6,c(e.current.value,t.current.value);case 6:s("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),j("Failed to login");case 12:m(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(a.useEffect)((function(){return m(!1),function(){m(!0)}}),[]),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h1",{className:"createAccount-header",children:"Login"}),i&&Object(l.jsx)("p",{children:i}),Object(l.jsxs)("form",{className:"createAccount-form",onSubmit:x,children:[Object(l.jsxs)("label",{className:"email",children:["Email:",Object(l.jsx)("input",{className:"createAccount-Input",type:"text",name:"email",ref:e})]}),Object(l.jsxs)("label",{className:"password",children:["Password:",Object(l.jsx)("input",{className:"createAccount-Input",type:"password",name:"password",autoComplete:"on",ref:t})]}),Object(l.jsx)("button",{disabled:d,type:"submit",className:"createAccount-btn",children:"Log In"})]}),Object(l.jsxs)("p",{children:["Need an account? ",Object(l.jsx)($.b,{to:"/createAccount",children:" Create an Account "})]})]})},V=(c(57),function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useRef)(),n=Q(),r=n.signup,i=n.error,j=n.setError,u=Object(a.useState)(!1),b=Object(o.a)(u,2),d=b[0],h=b[1],m=function(){var a=Object(p.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),c.current.value===s.current.value){a.next=3;break}return a.abrupt("return",j("Passwords do not match"));case 3:return a.prev=3,h(!0),a.next=7,r(t.current.value,c.current.value,e.current.value);case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(3),j("Failed to create an account");case 12:h(!1);case 13:case"end":return a.stop()}}),a,null,[[3,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(a.useEffect)((function(){return h(!1),function(){h(!0),j("")}}),[j]),console.log(i),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h1",{className:"createAccount-header",children:"Join the BookClub"}),i&&Object(l.jsx)("p",{children:i}),Object(l.jsxs)("form",{className:"createAccount-form",onSubmit:m,children:[Object(l.jsxs)("label",{className:"username",children:["Username:",Object(l.jsx)("input",{className:"createAccount-Input",type:"text",name:"username",ref:e})]}),Object(l.jsxs)("label",{className:"email",children:["Email:",Object(l.jsx)("input",{className:"createAccount-Input",type:"text",name:"email",ref:t})]}),Object(l.jsxs)("label",{className:"password",children:["Password:",Object(l.jsx)("input",{className:"createAccount-Input",type:"password",name:"password",autoComplete:"on",ref:c})]}),Object(l.jsxs)("label",{className:"confirm-Password",children:["Confirm Password:",Object(l.jsx)("input",{className:"createAccount-Input",type:"password",name:"confirm-Password",autoComplete:"off",ref:s})]}),Object(l.jsx)("button",{disabled:d,type:"submit",className:"createAccount-btn",children:"Create Account"})]}),Object(l.jsxs)("p",{children:["Already have an account? ",Object(l.jsx)($.b,{to:"/login",children:" Log In"})," "]})]})}),X=(c(58),function(){return Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"footer-wrapper",children:[Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("p",{children:"BookBarn's Services"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"})]}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("p",{children:"About Us"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"})]}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("p",{children:"Quick Help"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"})]}),Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("p",{children:"Shop By Category"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"}),Object(l.jsx)("p",{children:"blah blah"})]})]}),Object(l.jsx)("p",{className:"copyright",children:"\xa92021 BookBarn All Rights Reserved."})]})}),Z=function(){var e=Object(h.e)();return"/createAccount"===e.pathname||"/login"===e.pathname?null:Object(l.jsx)(G,{})},ee=function(){var e=Object(h.e)();return"/createAccount"===e.pathname||"/login"===e.pathname?null:Object(l.jsx)(X,{})};var te=function(){return Object(l.jsxs)($.a,{basename:"/",children:[Object(l.jsx)(f,{children:Object(l.jsx)(E,{children:Object(l.jsxs)(Y,{children:[Object(l.jsx)(Z,{}),Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{path:"/login",element:Object(l.jsx)(M,{})}),Object(l.jsx)(h.a,{path:"/createAccount",element:Object(l.jsx)(V,{})}),Object(l.jsx)(h.a,{path:"/",element:Object(l.jsx)(v,{})}),Object(l.jsx)(h.a,{path:"/all-books",element:Object(l.jsx)(P,{})}),Object(l.jsx)(h.a,{path:"/about-us",element:Object(l.jsx)(N,{})})]})]})})}),Object(l.jsx)(ee,{})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(te,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f387bdd2.chunk.js.map
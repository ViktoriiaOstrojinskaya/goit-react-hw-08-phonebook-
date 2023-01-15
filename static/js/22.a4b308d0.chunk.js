"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{2022:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,o,u,c,a,i,s,l,d=t(2791),f=t(9434),h=t(3634),m=function(n){return n.contacts.loading},p=function(n){return n.contacts.filter},b=function(n){return n.contacts.items},x=t(4270),g=t(9439),Z=t(6382),v=t(5218),j=t(168),y=t(9202),w=y.Z.form(r||(r=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),k=y.Z.input(o||(o=(0,j.Z)(["\n  width: auto;\n  height: 25px;\n  margin-left: ","px;\n  border-radius: ",";\n  border: ",";\n  background-color: ",";\n\n  &:focus {\n    outline: transparent;\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.steelBlue)}),(function(n){return n.theme.colors.snow})),C=y.Z.button(u||(u=(0,j.Z)(["\n  width: 85px;\n  height: auto;\n\n  font-size: ",";\n  border-radius: ",";\n  border: ",";\n  background-color: ",";\n  color: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.steelBlue}),(function(n){return n.theme.colors.royalBlue}),(function(n){return n.theme.colors.royalBlue}),(function(n){return n.theme.colors.white})),z=t(184),B=function(){var n=(0,d.useState)(""),e=(0,g.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)(""),u=(0,g.Z)(o,2),c=u[0],a=u[1],i=(0,f.I0)(),s=(0,f.v9)(b),l=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":a(o);break;default:return}},m=function(n){s.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?v.ZP.error("".concat(t," is already in contacts")):i((0,h.uK)(n))},p=function(){r(""),a("")};return(0,z.jsxs)(w,{onSubmit:function(n){n.preventDefault();var e={id:(0,Z.x0)(),name:t,number:c};m(e),p()},autoComplete:"off",children:[(0,z.jsxs)("label",{children:["Name",(0,z.jsx)(k,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:l})]}),(0,z.jsxs)("label",{children:["Number",(0,z.jsx)(k,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:l})]}),(0,z.jsx)(C,{type:"submit",children:"Add contact"})]})},A=y.Z.ul(c||(c=(0,j.Z)(["\n  margin-top: ","px;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),S=y.Z.p(a||(a=(0,j.Z)(["\n  margin-top: ","px;\n"])),(function(n){return n.theme.space[5]})),q=y.Z.p(i||(i=(0,j.Z)(["\n  font-style: italic;\n  color: ",";\n"])),(function(n){return n.theme.colors.royalBlue})),L=y.Z.li(s||(s=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: ","px;\n  font-size: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.s})),_=y.Z.button(l||(l=(0,j.Z)(["\n  width: 85px;\n  height: 30px;\n  font-size: ",";\n  border-radius: ",";\n  border: ",";\n  background-color: ",";\n  color: ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.steelBlue}),(function(n){return n.theme.colors.royalBlue}),(function(n){return n.theme.colors.royalBlue}),(function(n){return n.theme.colors.white})),I=function(){var n=(0,f.I0)(),e=(0,f.v9)(b),t=(0,f.v9)(p),r=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,z.jsxs)(A,{children:[(0,z.jsx)(S,{children:0===r.length?"We didn`t find contacts your request \ud83d\ude2d":"You have ".concat(r.length," contacts")}),r.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,z.jsxs)(L,{children:[(0,z.jsxs)(q,{children:[r,": ",o]}),(0,z.jsx)(_,{type:"button",onClick:function(){return n((0,h.GK)(t))},children:"Delete"})]},t)}))]})};function N(){var n=(0,f.I0)(),e=(0,f.v9)(m);return(0,d.useEffect)((function(){n((0,h.yF)())}),[n]),(0,z.jsxs)("div",{children:[(0,z.jsx)(x.q,{children:(0,z.jsx)("h1",{children:"Contacts"})}),(0,z.jsx)(B,{}),(0,z.jsx)("div",{children:e&&"Request in progress..."}),(0,z.jsx)(I,{})]})}}}]);
//# sourceMappingURL=22.a4b308d0.chunk.js.map
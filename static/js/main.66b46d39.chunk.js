(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,,function(t,e,i){},,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),c=i(8),r=i.n(c),s=i(2),l=i(3),u=i(5),d=i(4),o=(i(16),i(17),i(18),i(0)),b=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props,e=t.isEditable,i=t.value,n=t.handleChange,a=t.attribute,c=t.itemId,r=t.isMultiline;return e?Object(o.jsxs)("div",{className:"input-wrapper",children:[Object(o.jsx)("span",{className:a,"aria-hidden":"true",children:i}),r?Object(o.jsx)("textarea",{className:a,value:i,onChange:n,"data-item-id":c}):Object(o.jsx)("input",{className:a,type:"text",value:i,onChange:n,"data-item-id":c})]}):Object(o.jsx)("span",{className:a,children:i})}}]),i}(n.Component),j=i(11),h=(i(20),function(t){var e=t.onClick;return Object(o.jsx)("button",{onClick:e,className:"edit-submit-btn",children:"Edit"})}),m=function(t){var e=t.onClick;return Object(o.jsx)("button",{onClick:e,className:"edit-submit-btn",children:"Submit"})},O=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(s.a)(this,i),(n=e.call(this,t)).handleEditClick=function(){n.setState({isEditable:!0})},n.handleSubmitClick=function(){n.setState({isEditable:!1})},n.state={isEditable:!1},n}return Object(l.a)(i,[{key:"render",value:function(){var t=this.state.isEditable,e=this.props,i=e.sectionTitle,n=e.ItemTag,a=e.items,c=e.itemFactory,r=e.isLastSection,s=e.hideTitle;return Object(o.jsxs)("section",{id:i.toLowerCase(),children:[!s&&Object(o.jsx)("h2",{children:i}),t?Object(o.jsx)(m,{onClick:this.handleSubmitClick}):Object(o.jsx)(h,{onClick:this.handleEditClick}),Object(o.jsx)(f,{isEditable:t,ItemTag:n,items:a,itemFactory:c}),!r&&Object(o.jsx)("hr",{})]})}}]),i}(n.Component),f=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(s.a)(this,i),(n=e.call(this,t)).handleChange=function(t){var e=n.state.items,i=t.target,a=e;a.find((function(t){return t.id===i.dataset.itemId}))[i.className]=i.value,n.setState({items:a})},n.handleAddFieldClick=function(){var t=n.props.itemFactory();n.setState({items:[].concat(Object(j.a)(n.state.items),[t])})},n.handleDeleteClick=function(t){var e=n.state.items,i=e,a=e.findIndex((function(e){return e.id===t.currentTarget.dataset.field}));i.splice(a,1),n.setState({items:i})},n.state={items:t.items},n}return Object(l.a)(i,[{key:"render",value:function(){var t=this,e=this.props,i=e.isEditable,n=e.ItemTag,a=e.isMultiline,c=this.state.items;return Object(o.jsxs)("div",{children:[Object(o.jsx)("ul",{children:c.map((function(e){return Object(o.jsx)(n,{isEditable:i,item:e,handleChange:t.handleChange,handleDeleteClick:t.handleDeleteClick,isMultiline:a},e.id)}))}),i&&Object(o.jsx)("button",{className:"new-item-btn",onClick:this.handleAddFieldClick,children:"+"})]})}}]),i}(n.Component),x=O,p=i(6),v=i.n(p),C=(i(22),i.p+"static/media/delete-icon.b7053875.svg"),g=function(t){var e=t.onClick,i=t.fieldId;return Object(o.jsx)("button",{onClick:e,className:"delete-btn","data-field":i,children:Object(o.jsx)("img",{src:C,alt:"Delete icon"})})};function k(t,e){return{text:t,type:e,id:v()()}}function y(t){var e=t.isEditable,i=t.item,n=t.handleChange,a=t.handleDeleteClick;return Object(o.jsxs)("span",{className:i.type,children:["email"!==i.type&&"name"!==i.type&&Object(o.jsx)(E,{}),e&&"link"===i.type&&Object(o.jsx)(g,{onClick:a,fieldId:i.id}),Object(o.jsx)(b,{isEditable:e,value:i.text,handleChange:n,itemId:i.id,attribute:"text"})]})}function E(){return Object(o.jsx)("span",{className:"seperator",children:" | "})}var I=function(){return Object(o.jsx)(x,{sectionTitle:"Information",items:[k("First Last","name"),k("firstlast@example.com","email"),k("123-456-7890","phoneNumber")],ItemTag:y,itemFactory:function(){return k("Link","link")},hideTitle:!0})},S=(i(23),function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(s.a)(this,i),(n=e.call(this,t)).handleEditClick=function(){n.setState({isEditable:!0})},n.handleSubmitClick=function(){n.setState({isEditable:!1})},n.handleChange=function(t){n.setState({blurb:t.target.value})},n.state={isEditable:!1,blurb:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum bibendum enim et viverra. Quisque massa augue, ullamcorper nec ultricies ut, efficitur et diam. Etiam commodo est eget risus posuere euismod. Mauris a augue vel mi volutpat congue. Vivamus placerat aliquet ultrices. "},n}return Object(l.a)(i,[{key:"render",value:function(){var t=this.state,e=t.isEditable,i=t.blurb;return Object(o.jsxs)("section",{id:"profile",children:[Object(o.jsx)("h2",{children:"Profile"}),e?Object(o.jsx)(m,{onClick:this.handleSubmitClick}):Object(o.jsx)(h,{onClick:this.handleEditClick}),Object(o.jsx)(b,{isEditable:e,value:i,handleChange:this.handleChange,isMultiline:!0}),Object(o.jsx)("hr",{})]})}}]),i}(n.Component)),N=(i(24),i(9),function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props,e=t.isEditable,i=t.item,n=t.handleChange,a=t.handleDeleteClick,c=t.isMultiline;return Object(o.jsxs)("li",{className:"bullet",children:[e&&Object(o.jsx)(g,{onClick:a,fieldId:i.id}),Object(o.jsx)(b,{isEditable:e,value:i.text,handleChange:n,itemId:i.id,attribute:"text",isMultiline:c})]})}}]),i}(n.Component)),T=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(o.jsx)(x,{sectionTitle:"Experience",items:[D()],ItemTag:M,itemFactory:D})}}]),i}(n.Component),D=function(){return{title:"Job Title",employer:"Employer",location:"City, State",startDate:"Start Date",endDate:"Present",bullets:[{text:"Bullet 1",id:v()()},{text:"Bullet 2",id:v()()},{text:"Bullet 3",id:v()()}],id:v()()}},M=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props,e=t.item,i=t.isEditable,n=t.handleChange,a=t.handleDeleteClick;return Object(o.jsxs)("article",{className:"job",children:[i&&Object(o.jsx)(g,{onClick:a,fieldId:e.id}),Object(o.jsxs)("h3",{children:[Object(o.jsx)(b,{isEditable:i,value:e.employer,handleChange:n,itemId:e.id,attribute:"employer"}),", ",Object(o.jsx)(b,{isEditable:i,value:e.location,handleChange:n,itemId:e.id,attribute:"location"})]}),Object(o.jsx)("h4",{children:Object(o.jsx)(b,{isEditable:i,value:e.title,handleChange:n,itemId:e.id,attribute:"title"})}),Object(o.jsxs)("div",{className:"dates",children:[Object(o.jsx)(b,{isEditable:i,value:e.startDate,handleChange:n,itemId:e.id,attribute:"startDate"}),"-",Object(o.jsx)(b,{isEditable:i,value:e.endDate,handleChange:n,itemId:e.id,attribute:"endDate"})]}),Object(o.jsx)(f,{isEditable:i,ItemTag:N,items:e.bullets,itemFactory:F,isMultiline:!0})]})}}]),i}(n.Component),F=function(){return{text:"Bullet Point",id:v()()}},P=T,B=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){for(var t=[],e=1;e<=6;)t.push(w()),e++;return Object(o.jsx)(x,{sectionTitle:"Skills",items:t,ItemTag:N,itemFactory:w})}}]),i}(n.Component),w=function(){return{text:"Skill",id:v()()}},A=B;i(25);function L(){return{institution:"Institution",gradDate:"May 20XX",location:"City, State",degree:"B.A. in [ Major ]",id:v()()}}var J=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(o.jsx)(x,{sectionTitle:"Education",items:[L()],ItemTag:q,itemFactory:L})}}]),i}(n.Component),q=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var t=this.props,e=t.item,i=t.isEditable,n=t.handleChange,a=t.handleDeleteClick;return Object(o.jsxs)("article",{className:"school",children:[i&&Object(o.jsx)(g,{onClick:a,fieldId:e.id}),Object(o.jsxs)("h3",{children:[Object(o.jsx)(b,{isEditable:i,value:e.institution,handleChange:n,itemId:e.id,attribute:"institution"}),", ",Object(o.jsx)(b,{isEditable:i,value:e.location,handleChange:n,itemId:e.id,attribute:"location"})]}),Object(o.jsx)(b,{isEditable:i,value:e.degree,handleChange:n,itemId:e.id,attribute:"degree"}),Object(o.jsx)("div",{className:"dates",children:Object(o.jsx)(b,{isEditable:i,value:e.gradDate,handleChange:n,itemId:e.id,attribute:"gradDate"})})]})}}]),i}(n.Component),X=J,G=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){return Object(s.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(o.jsx)(x,{sectionTitle:"Activities",items:[Q(),Q()],ItemTag:N,itemFactory:Q,isLastSection:"true"})}}]),i}(n.Component),Q=function(){return{text:"Activity",id:v()()}},R=G,V=i(10),z=i.n(V),H=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(s.a)(this,i),(n=e.call(this,t)).state={isPrintMode:!1},n}return Object(l.a)(i,[{key:"render",value:function(){var t=this.state.isPrintMode;return Object(o.jsxs)("main",{className:t?"pdf":void 0,children:[Object(o.jsx)(I,{}),Object(o.jsx)(S,{}),Object(o.jsx)(A,{}),Object(o.jsx)(P,{}),Object(o.jsx)(X,{}),Object(o.jsx)(R,{})]})}}]),i}(n.Component);var K=function(){var t=Object(n.useRef)();return Object(o.jsxs)("div",{children:[Object(o.jsx)(H,{ref:t}),Object(o.jsx)(z.a,{trigger:function(){return Object(o.jsx)("button",{id:"print-btn",children:"Print!"})},content:function(){return t.current},pageStyle:"@page {margin: -1.5cm}",onBeforeGetContent:function(){return new Promise((function(e){t.current.setState({isPrintMode:!0},(function(){return e()}))}))},onAfterPrint:function(){return t.current.setState({isPrintMode:!1})}})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(K,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.66b46d39.chunk.js.map
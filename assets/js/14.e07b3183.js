(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"que-son-los-namespaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#que-son-los-namespaces"}},[a._v("#")]),a._v(" Qué son los nameSpaces")]),a._v(" "),t("p",[a._v("Los espacios de nombres  resuelven dos problemas diferentes:")]),a._v(" "),t("ol",[t("li",[a._v("Permiten una mejor organización al agrupar clases que trabajan juntas para realizar una tarea.")]),a._v(" "),t("li",[a._v("Permiten utilizar el mismo nombre para más de una clase.")])]),a._v(" "),t("p",[a._v("Por ejemplo, podemos tener un conjunto de clases que describen una tabla HTML, como Tabla, Fila y Celda, mientras que también podemos tener otro conjunto de clases para describir muebles, como Mesa (Table), Silla y Cama.")]),a._v(" "),t("p",[a._v("Los espacios de nombres se pueden usar para organizar las clases en dos grupos diferentes y al mismo tiempo evitar que se mezclen las dos clases Table html  y Table mueble.")]),a._v(" "),t("h2",{attrs:{id:"declarar-un-espacio-de-nombres"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#declarar-un-espacio-de-nombres"}},[a._v("#")]),a._v(" Declarar un espacio de nombres")]),a._v(" "),t("p",[a._v("Los espacios de nombres se declaran al principio de un archivo usando la palabra clave "),t("code",[a._v("namespace")]),a._v(":")]),a._v(" "),t("p",[a._v("Declaramos un espacio de nombres llamado Html:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Nota: una declaración namespace debe ser lo primero en el archivo PHP. El siguiente código no sería válido:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"Hello World!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])])]),t("p",[a._v("Las constantes, clases y funciones declaradas en este archivo pertenecerán al espacio de nombres Html :")]),a._v(" "),t("p",[a._v("Ejemplo\nCreamos una clase de tabla en el espacio de nombres Html:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$title")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$numRows")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v("\"<p>La Table '"),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("title")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),a._v("' tiene "),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("numRows")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),a._v(' filas.</p>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("title")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"My table"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v("numRows")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token doctype"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<!")]),t("span",{pre:!0,attrs:{class:"token doctype-tag"}},[a._v("DOCTYPE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token name"}},[a._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("body")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("Para una mayor organización, es posible tener espacios de nombres anidados:")]),a._v(" "),t("p",[a._v("Sintaxis\nDeclare un espacio de nombres llamado Html dentro de un espacio de nombres llamado Código:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"usar-espacios-de-nombres"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usar-espacios-de-nombres"}},[a._v("#")]),a._v(" Usar espacios de nombres")]),a._v(" "),t("p",[a._v("Cualquier código que siga a una declaración namespace está operando dentro del espacio de nombres, por lo que las clases que pertenecen al espacio de nombres se pueden instanciar sin ningún calificador. Para acceder a clases desde fuera de un espacio de nombres, la clase debe tener el espacio de nombres adjunto.")]),a._v(" "),t("p",[a._v("Ejemplo\nUtilice clases del espacio de nombres Html:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$row")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Row")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Cuando se utilizan muchas clases del mismo espacio de nombres al mismo tiempo, es más fácil utilizar la palabra clave "),t("code",[a._v("namespace")]),a._v(":")]),a._v(" "),t("p",[a._v("Ejemplo\nUtilice clases del espacio de nombres Html sin la necesidad del calificador Html :")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$row")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Row")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"alias-​​de-espacio-de-nombres-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alias-​​de-espacio-de-nombres-use"}},[a._v("#")]),a._v(" Alias ​​de espacio de nombres. USE")]),a._v(" "),t("p",[a._v("Puede resultar útil asignar un alias a un espacio de nombres o una clase para facilitar la escritura. Esto se hace con la palabra clave "),t("code",[a._v("use")]),a._v(":")]),a._v(" "),t("p",[a._v("Ejemplo\nAsigne un alias a un espacio de nombres:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Html")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("H")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("H"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Ejemplo\nDale un alias a una clase:")]),a._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[a._v("Html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$table")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
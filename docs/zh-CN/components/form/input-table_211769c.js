amis.define('docs/zh-CN/components/form/input-table.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputTable 表格",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputTable 表格",
    "icon": null,
    "order": 54,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><p>可以用来展示数组类型的数据。配置<code>columns</code> 数组，来定义列信息。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": \"true\",\n  \"data\": {\n    \"table\": [\n        {\n            \"a\": \"a1\",\n            \"b\": \"b1\"\n        },\n        {\n            \"a\": \"a2\",\n            \"b\": \"b2\"\n        },\n        {\n            \"a\": \"a3\",\n            \"b\": \"b3\"\n        }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"type\":\"input-table\",\n    \"name\":\"table\",\n    \"columns\":[\n        {\n          \"name\": \"a\",\n          \"label\": \"A\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\"\n        }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>我们为表单数据域设置了<code>table</code>变量，配置<code>table</code>表单项可以展示该数据</p>\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E5%BA%8F%E5%8F%B7\" href=\"#%E6%98%BE%E7%A4%BA%E5%BA%8F%E5%8F%B7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示序号</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n        {\n            \"a\": \"a1\",\n            \"b\": \"b1\"\n        },\n        {\n            \"a\": \"a2\",\n            \"b\": \"b2\"\n        },\n        {\n            \"a\": \"a3\",\n            \"b\": \"b3\"\n        }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"showIndex\": true,\n      \"type\":\"input-table\",\n      \"name\":\"table\",\n      \"columns\":[\n          {\n            \"name\": \"a\",\n            \"label\": \"A\"\n          },\n          {\n            \"name\": \"b\",\n            \"label\": \"B\"\n          }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AF%E6%96%B0%E5%A2%9E%E8%A1%8C\" href=\"#%E5%8F%AF%E6%96%B0%E5%A2%9E%E8%A1%8C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>可新增行</h2><p>可以配置<code>addable</code>和<code>editable</code>指定可以新增且编辑行数据</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"type\":\"input-table\",\n    \"name\":\"table\",\n    \"addable\": true,\n    \"editable\": true,\n    \"columns\":[\n        {\n          \"name\": \"a\",\n          \"label\": \"A\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\"\n        }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AF%E5%A4%8D%E5%88%B6%E6%96%B0%E5%A2%9E%E8%A1%8C\" href=\"#%E5%8F%AF%E5%A4%8D%E5%88%B6%E6%96%B0%E5%A2%9E%E8%A1%8C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>可复制新增行</h2><blockquote>\n<p>1.4.0 及以上版本</p>\n</blockquote>\n<p>还能通过 <code>copyable</code> 来增加一个复制按钮来复制当前行</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"type\":\"input-table\",\n    \"name\":\"table\",\n    \"addable\": true,\n    \"copyable\": true,\n    \"editable\": true,\n    \"value\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      }\n    ],\n    \"columns\":[\n        {\n          \"name\": \"a\",\n          \"label\": \"A\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\"\n        }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE%E4%B8%BA%E6%96%87%E5%AD%97\" href=\"#%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE%E4%B8%BA%E6%96%87%E5%AD%97\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>配置按钮为文字</h2><p>可以通过对应的 <code>BtnLabel</code> 及 <code>BtnIcon</code> 来改成显示文字而不是图标</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n    \"type\":\"input-table\",\n    \"name\":\"table\",\n    \"addable\": true,\n    \"addBtnLabel\": \"添加\",\n    \"addBtnIcon\": false,\n    \"copyable\": true,\n    \"copyBtnLabel\": \"复制\",\n    \"copyBtnIcon\": false,\n    \"editable\": true,\n    \"editBtnLabel\": \"编辑\",\n    \"editBtnIcon\": false,\n    \"value\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      }\n    ],\n    \"columns\":[\n        {\n          \"name\": \"a\",\n          \"label\": \"A\"\n        },\n        {\n          \"name\": \"b\",\n          \"label\": \"B\"\n        }\n    ]\n  }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E6%96%B0%E5%A2%9E%E8%A1%8C\" href=\"#%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E6%96%B0%E5%A2%9E%E8%A1%8C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>按钮触发新增行</h2><p>按钮上配置<code>&quot;actionType&quot;: &quot;add&quot;</code>和<code>target</code>指定表格<code>name</code>，可以实现点击按钮添加一行的效果。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      },\n      {\n        \"a\": \"a2\",\n        \"b\": \"b2\"\n      },\n      {\n        \"a\": \"a3\",\n        \"b\": \"b3\"\n      }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-table\",\n      \"name\": \"table\",\n      \"label\": \"Table\",\n      \"columns\": [\n        {\n          \"label\": \"A\",\n          \"name\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"name\": \"b\"\n        }\n      ]\n    },\n    {\n      \"type\": \"button\",\n      \"label\": \"Table新增一行\",\n      \"target\": \"table\",\n      \"actionType\": \"add\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>当表格上配置了<code>addApi</code>时，会请求该 <code>api</code>，并将返回数据添加到目标表格。</p>\n<p>另外还可以配置<code>payload</code>，直接将数据添加到目标表格。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      },\n      {\n        \"a\": \"a2\",\n        \"b\": \"b2\"\n      },\n      {\n        \"a\": \"a3\",\n        \"b\": \"b3\"\n      }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-table\",\n      \"name\": \"table\",\n      \"label\": \"Table\",\n      \"columns\": [\n        {\n          \"label\": \"A\",\n          \"name\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"name\": \"b\"\n        }\n      ]\n    },\n    {\n      \"type\": \"button\",\n      \"label\": \"Table新增一行\",\n      \"target\": \"table\",\n      \"actionType\": \"add\",\n      \"payload\": {\n        \"a\": \"a4\",\n        \"b\": \"b4\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AF%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9\" href=\"#%E5%8F%AF%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>可编辑内容</h2><blockquote>\n<p>这是 1.2.3 新增的合并写法，1.2.2 之前请用后面提到的 quickEdit</p>\n</blockquote>\n<p>每一列的都可以通过 type 来将其改造成可编辑的列，比如下面的例子（建议配合 <code>&quot;needConfirm&quot;: false</code> 来改成非确认模式）</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      },\n      {\n        \"a\": \"a2\",\n        \"b\": \"b2\"\n      },\n      {\n        \"a\": \"a3\",\n        \"b\": \"b3\"\n      }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-table\",\n      \"name\": \"table\",\n      \"label\": \"Table\",\n      \"addable\": true,\n      \"needConfirm\": false,\n      \"columns\": [\n        {\n          \"label\": \"A\",\n          \"name\": \"a\",\n          \"type\": \"input-text\"\n        },\n        {\n          \"label\": \"B\",\n          \"name\": \"b\",\n          \"type\": \"select\",\n          \"options\": [\n            \"b1\", \"b2\", \"b3\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>除了上面的例子，还可以在列上配置<code>quickEdit</code>实现编辑配置，实现展现和编辑分离，更多配置参考 <a href=\"../crud#%E5%BF%AB%E9%80%9F%E7%BC%96%E8%BE%91\">快速编辑</a></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      },\n      {\n        \"a\": \"a2\",\n        \"b\": \"b2\"\n      },\n      {\n        \"a\": \"a3\",\n        \"b\": \"b3\"\n      }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-table\",\n      \"name\": \"table\",\n      \"label\": \"Table\",\n      \"columns\": [\n        {\n          \"label\": \"A\",\n          \"name\": \"a\",\n          \"quickEdit\": {\n            \"type\": \"select\",\n            \"options\": [\"a1\", \"a2\", \"a3\"]\n          }\n        },\n        {\n          \"label\": \"B\",\n          \"name\": \"b\",\n          \"quickEdit\": true\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5\" href=\"#%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示分页</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n        {\n            \"a\": \"a1\",\n            \"b\": \"b1\"\n        },\n        {\n            \"a\": \"a2\",\n            \"b\": \"b2\"\n        },\n        {\n            \"a\": \"a3\",\n            \"b\": \"b3\"\n        },\n        {\n            \"a\": \"a4\",\n            \"b\": \"b4\"\n        },\n        {\n            \"a\": \"a5\",\n            \"b\": \"b5\"\n        },\n        {\n            \"a\": \"a6\",\n            \"b\": \"b6\"\n        }\n    ]\n  },\n  \"body\": [\n    {\n      \"showIndex\": true,\n      \"type\":\"input-table\",\n      \"perPage\": 5,\n      \"name\":\"table\",\n      \"columns\":[\n          {\n            \"name\": \"a\",\n            \"label\": \"A\"\n          },\n          {\n            \"name\": \"b\",\n            \"label\": \"B\"\n          }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AF%E6%8B%96%E6%8B%BD\" href=\"#%E5%8F%AF%E6%8B%96%E6%8B%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>可拖拽</h2><p>配置<code>&quot;draggable&quot;: true</code>，实现可拖拽调整顺序</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      },\n      {\n        \"a\": \"a2\",\n        \"b\": \"b2\"\n      },\n      {\n        \"a\": \"a3\",\n        \"b\": \"b3\"\n      }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-table\",\n      \"name\": \"table\",\n      \"label\": \"Table\",\n      \"draggable\": true,\n      \"columns\": [\n        {\n          \"label\": \"A\",\n          \"name\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"name\": \"b\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%9D%9E%E7%A1%AE%E8%AE%A4%E6%A8%A1%E5%BC%8F\" href=\"#%E9%9D%9E%E7%A1%AE%E8%AE%A4%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>非确认模式</h2><p>配置<code>&quot;needConfirm&quot;: false</code>，不需要确认，那么就是一直就是处于编辑形态。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"data\": {\n    \"table\": [\n      {\n        \"a\": \"a1\",\n        \"b\": \"b1\"\n      },\n      {\n        \"a\": \"a2\",\n        \"b\": \"b2\"\n      },\n      {\n        \"a\": \"a3\",\n        \"b\": \"b3\"\n      }\n    ]\n  },\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"input-table\",\n      \"name\": \"table\",\n      \"label\": \"Table\",\n      \"needConfirm\": false,\n      \"addable\": true,\n      \"removable\": true,\n      \"columns\": [\n        {\n          \"label\": \"A\",\n          \"name\": \"a\",\n          \"quickEdit\": false\n        },\n        {\n          \"label\": \"B\",\n          \"name\": \"b\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE\" href=\"#%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>获取父级数据</h2><p>默认情况下，Table 内表达项无法获取父级数据域的数据，如下，我们添加 Table 表单项时，尽管 Table 内的文本框的<code>name</code>与父级数据域中的<code>super_text</code>变量同名，但是没有自动映射值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n        \"type\": \"input-text\",\n        \"label\": \"父级文本框\",\n        \"name\": \"super_text\",\n        \"value\": \"123\"\n    },\n    {\n        \"type\": \"input-table\",\n        \"name\": \"list\",\n        \"label\": \"不可获取父级数据\",\n        \"addable\": true,\n        \"needConfirm\": false,\n        \"columns\": [\n            {\n                \"name\": \"super_text\",\n                \"type\": \"text\",\n                \"label\": \"A\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>可以配置<code>&quot;canAccessSuperData&quot;: true</code> 同时配置 <code>&quot;strictMode&quot;: false</code> 开启此特性，如下，配置了该配置项后，添加 Table 的<code>text</code>表单项会初始会自动映射父级数据域的同名变量。需要注意的是，这里只会初始会映射，一旦修改过就是当前行数据为主了。也就是说，表单项类型的，只会起到初始值的作用。如果为非表单项则会同步更新，比如这个例子的第二列。同时非表单项字段可以用在表单项字段中做联动。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"mode\": \"horizontal\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n        \"type\": \"input-text\",\n        \"label\": \"父级文本框\",\n        \"name\": \"super_text\",\n        \"value\": \"123\"\n    },\n    {\n        \"type\": \"switch\",\n        \"label\": \"父级勾选框\",\n        \"name\": \"super_switch\",\n        \"value\": false\n    },\n    {\n        \"type\": \"input-table\",\n        \"name\": \"list\",\n        \"label\": \"可获取父级数据\",\n        \"addable\": true,\n        \"needConfirm\": false,\n        \"canAccessSuperData\": true,\n        \"strictMode\": false,\n        \"value\": [{}],\n        \"columns\": [\n            {\n                \"name\": \"super_text\",\n                \"type\": \"text\",\n                \"label\": \"表单项\",\n                \"quickEdit\": {\n                  \"disabledOn\": \"this.super_switch\"\n                }\n            },\n\n            {\n                \"name\": \"super_switch\",\n                \"type\": \"status\",\n                \"quickEdit\": false,\n                \"label\": \"非表单项\"\n            }\n        ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%AB%98%E4%BA%AE%E8%A1%8C\" href=\"#%E9%AB%98%E4%BA%AE%E8%A1%8C\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>高亮行</h2><blockquote>\n<p>1.8.0 及以上版本</p>\n</blockquote>\n<p>通过 <code>rowClassNameExpr</code> 来添加类，比如下面的例子中，如果输入的内容是 <code>a</code> 则背景色为绿色`</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n      {\n        \"type\": \"input-table\",\n        \"name\": \"table\",\n        \"addable\": true,\n        \"editable\": true,\n        \"rowClassNameExpr\": \"<%= data.a === 'a' ? 'bg-success' : '' %>\",\n        \"columns\": [\n          {\n            \"name\": \"a\",\n            \"label\": \"A\"\n          }\n        ]\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;table&quot;</code></td>\n<td>指定为 Table 渲染器</td>\n</tr>\n<tr>\n<td>addable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可增加一行</td>\n</tr>\n<tr>\n<td>editable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可编辑</td>\n</tr>\n<tr>\n<td>removable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可删除</td>\n</tr>\n<tr>\n<td>showAddBtn</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否显示添加按钮</td>\n</tr>\n<tr>\n<td>addApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td>-</td>\n<td>新增时提交的 API</td>\n</tr>\n<tr>\n<td>updateApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td>-</td>\n<td>修改时提交的 API</td>\n</tr>\n<tr>\n<td>deleteApi</td>\n<td><a href=\"../../../docs/types/api\">API</a></td>\n<td>-</td>\n<td>删除时提交的 API</td>\n</tr>\n<tr>\n<td>addBtnLabel</td>\n<td><code>string</code></td>\n<td></td>\n<td>增加按钮名称</td>\n</tr>\n<tr>\n<td>addBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;plus&quot;</code></td>\n<td>增加按钮图标</td>\n</tr>\n<tr>\n<td>copyBtnLabel</td>\n<td><code>string</code></td>\n<td></td>\n<td>复制按钮文字</td>\n</tr>\n<tr>\n<td>copyBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;copy&quot;</code></td>\n<td>复制按钮图标</td>\n</tr>\n<tr>\n<td>editBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>编辑按钮名称</td>\n</tr>\n<tr>\n<td>editBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;pencil&quot;</code></td>\n<td>编辑按钮图标</td>\n</tr>\n<tr>\n<td>deleteBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>删除按钮名称</td>\n</tr>\n<tr>\n<td>deleteBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;minus&quot;</code></td>\n<td>删除按钮图标</td>\n</tr>\n<tr>\n<td>confirmBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>确认编辑按钮名称</td>\n</tr>\n<tr>\n<td>confirmBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;check&quot;</code></td>\n<td>确认编辑按钮图标</td>\n</tr>\n<tr>\n<td>cancelBtnLabel</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>取消编辑按钮名称</td>\n</tr>\n<tr>\n<td>cancelBtnIcon</td>\n<td><code>string</code></td>\n<td><code>&quot;times&quot;</code></td>\n<td>取消编辑按钮图标</td>\n</tr>\n<tr>\n<td>needConfirm</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否需要确认操作，，可用来控控制表格的操作交互</td>\n</tr>\n<tr>\n<td>canAccessSuperData</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可以访问父级数据，也就是表单中的同级数据，通常需要跟 strictMode 搭配使用</td>\n</tr>\n<tr>\n<td>strictMode</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>为了性能，默认其他表单项项值变化不会让当前表格更新，有时候为了同步获取其他表单项字段，需要开启这个。</td>\n</tr>\n<tr>\n<td>columns</td>\n<td><code>array</code></td>\n<td>[]</td>\n<td>列信息</td>\n</tr>\n<tr>\n<td>columns[x].quickEdit</td>\n<td><code>boolean</code> 或者 <code>object</code></td>\n<td>-</td>\n<td>配合 editable 为 true 一起使用</td>\n</tr>\n<tr>\n<td>columns[x].quickEditOnUpdate</td>\n<td><code>boolean</code> 或者 <code>object</code></td>\n<td>-</td>\n<td>可以用来区分新建模式和更新模式的编辑配置</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "显示序号",
          "fragment": "%E6%98%BE%E7%A4%BA%E5%BA%8F%E5%8F%B7",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E5%BA%8F%E5%8F%B7",
          "level": 2
        },
        {
          "label": "可新增行",
          "fragment": "%E5%8F%AF%E6%96%B0%E5%A2%9E%E8%A1%8C",
          "fullPath": "#%E5%8F%AF%E6%96%B0%E5%A2%9E%E8%A1%8C",
          "level": 2
        },
        {
          "label": "可复制新增行",
          "fragment": "%E5%8F%AF%E5%A4%8D%E5%88%B6%E6%96%B0%E5%A2%9E%E8%A1%8C",
          "fullPath": "#%E5%8F%AF%E5%A4%8D%E5%88%B6%E6%96%B0%E5%A2%9E%E8%A1%8C",
          "level": 2
        },
        {
          "label": "配置按钮为文字",
          "fragment": "%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE%E4%B8%BA%E6%96%87%E5%AD%97",
          "fullPath": "#%E9%85%8D%E7%BD%AE%E6%8C%89%E9%92%AE%E4%B8%BA%E6%96%87%E5%AD%97",
          "level": 2
        },
        {
          "label": "按钮触发新增行",
          "fragment": "%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E6%96%B0%E5%A2%9E%E8%A1%8C",
          "fullPath": "#%E6%8C%89%E9%92%AE%E8%A7%A6%E5%8F%91%E6%96%B0%E5%A2%9E%E8%A1%8C",
          "level": 2
        },
        {
          "label": "可编辑内容",
          "fragment": "%E5%8F%AF%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9",
          "fullPath": "#%E5%8F%AF%E7%BC%96%E8%BE%91%E5%86%85%E5%AE%B9",
          "level": 2
        },
        {
          "label": "显示分页",
          "fragment": "%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E5%88%86%E9%A1%B5",
          "level": 2
        },
        {
          "label": "可拖拽",
          "fragment": "%E5%8F%AF%E6%8B%96%E6%8B%BD",
          "fullPath": "#%E5%8F%AF%E6%8B%96%E6%8B%BD",
          "level": 2
        },
        {
          "label": "非确认模式",
          "fragment": "%E9%9D%9E%E7%A1%AE%E8%AE%A4%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E9%9D%9E%E7%A1%AE%E8%AE%A4%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "获取父级数据",
          "fragment": "%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE",
          "fullPath": "#%E8%8E%B7%E5%8F%96%E7%88%B6%E7%BA%A7%E6%95%B0%E6%8D%AE",
          "level": 2
        },
        {
          "label": "高亮行",
          "fragment": "%E9%AB%98%E4%BA%AE%E8%A1%8C",
          "fullPath": "#%E9%AB%98%E4%BA%AE%E8%A1%8C",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});

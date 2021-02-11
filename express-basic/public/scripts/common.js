
// 返回结果数据，并在 客户端渲染
$.ajax({
    url: '/api/list',
    success(result) {
        console.log(result);

        // 前端使用 art-template 模板渲染
        let templateStr = `
            <ul>
                {{each data}}
                    <li>{{$value}}</li>
                {{/each}}
            </ul>
        `

        const html = template.render(templateStr, {
            data: result.data
        });
        // console.log(html);

        $("body").append(html)
    }
})
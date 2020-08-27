auto()

toast('准备开始')
sleep(10000)
toast('开始运行')

var main_loop = 0
while (main_loop <= 10) {
    var result = click("复制")
    if (!result) {
        toast('好像复制完了，退出！')
        break
    }
    sleep(2000)

    click("确定")
    sleep(2000)

    inner_loop = 0
    while (inner_loop <= 100) {

        if (textContains('文件已存在').exists()) {
            click("全部执行此操作")
            sleep(1000)

            click("跳过")
            toast('检测到文件存在，进行跳过操作！')
        }

        sleep(10000)
        inner_loop++
        toast('内循环了' + inner_loop + '次!')
    }

    click("取消")
    sleep(2000)
    
    main_loop++
    toast('外层取消了' + main_loop + '次！')
}

toast('结束运行')
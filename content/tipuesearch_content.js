var tipuesearch = {"pages": [{'title': '簡介', 'text': 'CMSimfly ( https://github.com/chiamingyen/cmsimfly)  是一套簡單的網際內容管理系統, 採用 Flask 網際框架, 以 Beautifulsoup 解讀分頁內容. \n \n', 'tags': '', 'url': '簡介.html'}, {'title': '目錄結構', 'text': 'CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n', 'tags': '', 'url': '目錄結構.html'}, {'title': '頁面編輯', 'text': 'CMSimfly 動態系統的網際編輯器採用  TinyMCE4 , 可以放入一般超文件,\xa0 納入圖檔, 嵌入影片連結, 並且加入帶有行數的原始碼. \n 透過 File Upload 功能, 可以一次上傳多個檔案,\xa0 存入 downloads 目錄中儲存, 之後各頁面可以引入對應連結. \n 而圖檔的上傳與引用與一般檔案類似, 但上傳後存入 images 目錄中. \n', 'tags': '', 'url': '頁面編輯.html'}, {'title': '插入程式碼', 'text': 'CMSimfly 目前使用Syntaxhighlighter 3.0.83: \n \xa0 http://alexgorbatchev.com/SyntaxHighlighter/ \xa0 \n 進行頁面中的程式碼高亮顯示. \n', 'tags': '', 'url': '插入程式碼.html'}, {'title': 'Java 程式碼', 'text': 'import java.util.Scanner; \n \n公共課生活{ \n    public static void show（boolean [] [] grid）{ \n        String s =“”; \n        for（boolean [] row：grid）{ \n            for（boolean val：row） \n                如果（VAL） \n                    s + =“*”; \n                其他 \n                    s + =“。”; \n            s + =“\\ n”; \n        } \n        的System.out.println（一個或多個）; \n    } \n     \n    public static boolean [] [] gen（）{ \n        boolean [] [] grid = new boolean [10] [10]; \n        for（int r = 0; r <10; r ++） \n            for（int c = 0; c <10; c ++） \n                if（Math.random（）> 0.7） \n                    grid [r] [c] = true; \n        返回網格; \n    } \n     \n    public static void main（String [] args）{ \n        boolean [] [] world = gen（）; \n        節目（世界）; \n        的System.out.println（）; \n        world = nextGen（world）; \n        節目（世界）; \n        掃描儀s =新掃描儀（System.in）; \n        while（s.nextLine（）。length（）== 0）{ \n            的System.out.println（）; \n            world = nextGen（world）; \n            節目（世界）; \n             \n        } \n    } \n     \n    public static boolean [] [] nextGen（boolean [] [] world）{ \n        boolean [] [] newWorld  \n            = new boolean [world.length] [world [0] .length]; \n        int num; \n        for（int r = 0; r <world.length; r ++）{ \n            for（int c = 0; c <world [0] .length; c ++）{ \n                num = numNeighbors（world，r，c）; \n                if（occupiedNext（num，world [r] [c]）） \n                    newWorld [r] [c] = true; \n            } \n        } \n        返回newWorld; \n    } \n     \n    public static boolean occupiedNext（int numNeighbors，boolean occupied）{ \n        if（佔用&&（numNeighbors == 2 || numNeighbors == 3）） \n            返回true; \n        否則if（！occupied && numNeighbors == 3） \n            返回true; \n        其他 \n            返回false; \n    } \n \n    private static int numNeighbors（boolean [] [] world，int row，int col）{ \n        int num = world [row] [col]？ -1：0; \n        for（int r = row  -  1; r <= row + 1; r ++） \n            for（int c = col  -  1; c <= col + 1; c ++） \n                if（inbounds（world，r，c）&& world [r] [c]） \n                    num ++; \n \n        當然回報; \n    } \n \n    private static boolean inbounds（boolean [] [] world，int r，int c）{ \n        return r> = 0 && r <world.length && c> = 0 && \n        c <world [0] .length; \n    } \n \n} \n \n', 'tags': '', 'url': 'Java 程式碼.html'}, {'title': 'Python 程式碼', 'text': "def parse_content（）： \n    msgstr“”“使用bs4和re模塊函數來解析content.htm”“” \n    #from pybean import Store，SQLiteWriter \n    #if no content.db，用cms表創建數據庫文件 \n    ''' \n    如果不是os.path.isfile（config_dir +“content.db”）： \n        library = Store（SQLiteWriter（config_dir +“content.db”，frozen = False）） \n        cms = library.new（“cms”） \n        cms.follow = 0 \n        cms.title =“頭1” \n        cms.content =“內容1” \n        cms.memo =“第一份備忘錄” \n        library.save（CMS） \n        library.commit（） \n    ''' \n    #if if content.htm，生成head 1和content 1文件 \n    如果不是os.path.isfile（config_dir +“content.htm”）： \n        如果沒有content.htm，則＃create content.htm \n        File = open（config_dir +“content.htm”，“w”，encoding =“utf-8”） \n        File.write（“<h1> head 1 </ h1> content 1”） \n        File.close（） \n    subject = file_get_contents（config_dir +“content.htm”） \n    ＃處理沒有內容的內容 \n    如果主題==“”： \n        如果沒有content.htm，則＃create content.htm \n        File = open（config_dir +“content.htm”，“w”，encoding =“utf-8”） \n        File.write（“<h1> head 1 </ h1> content 1”） \n        File.close（） \n        subject =“<h1> head 1 </ h1> content 1” \n    ＃初始化返回列表 \n    head_list = [] \n    level_list = [] \n    page_list = [] \n    ＃從html內容中製作湯 \n    湯= bs4.BeautifulSoup（主題，'html.parser'） \n    # 嘗試解讀各種情況下的標題 \n    湯= _remove_h123_attrs（湯） \n    # 改寫 content.htm 後重新取 subject \n    使用open（config_dir +“content.htm”，“wb”）作為f： \n        f.write（soup.encode（“UTF-8”）） \n    subject = file_get_contents（config_dir +“content.htm”） \n    ＃將所有h1，h2，h3標籤放入列表中 \n    htag = soup.find_all（['h1'，'h2'，'h3']） \n    n = len（htag） \n    ＃使用每個h標籤獲取要分割主題的頁面內容 \n    temp_data = subject.split（str（htag [0]）） \n    如果len（temp_data）> 2： \n        subject = str（htag [0]）。join（temp_data [1：]） \n    其他： \n        subject = temp_data [1] \n    如果n> 1： \n            #i從1到i-1 \n            對於範圍內的i（1，len（htag））： \n                head_list.append（htag [I-1] .text.strip（）） \n                ＃使用h * tag的name屬性來獲取h1，h2或h3 \n                #h1，h2或h3的數量是頁面菜單的級別 \n                level_list.append（htag [I-1]。名稱[1]） \n                temp_data = subject.split（str（htag [i]）） \n                如果len（temp_data）> 2： \n                    subject = str（htag [i]）。join（temp_data [1：]） \n                其他： \n                    subject = temp_data [1] \n                ＃將htag中的其他頁面內容從1切換到i-1 \n                cut = temp_data [0] \n                ＃添加頁面內容 \n                page_list.append（切） \n    #last i \n    ＃添加最後一頁標題 \n    head_list.append（htag [N-1] .text.strip（）） \n    ＃添加最後一個級別 \n    level_list.append（htag [N-1]。名稱[1]） \n    temp_data = subject.split（str（htag [n-1]）） \n    ＃最後一個主題 \n    subject = temp_data [0] \n    ＃剪掉最後一頁內容 \n    cut = temp_data [0] \n    ＃最後一頁內容 \n    page_list.append（切） \n    return head_list，level_list，page_list \n \n \n \n", 'tags': '', 'url': 'Python 程式碼.html'}, {'title': 'C或C++程式碼', 'text': '請注意, 目前 CMSimfly 標題內文無法解讀 "/" 符號, 因此若本頁面的標題為\xa0 "C/C++程式碼", 則無法進行分頁. \n / * Runge Kutta為一組一階微分方程* / \n  \n#include <stdio.h> \n#include <math.h> \n  \n#define N 2 / *一階方程的數量* / \n#define dist 0.1 / * stepize in t * / \n#define MAX 30.0 / * max for t * / \n  \nFILE *輸出;  / *內部文件名* / \nFILE * output1;  / *內部文件名* / \n// 利用 pipe 呼叫 gnuplot 繪圖 \n文件*管道; \n  \nvoid runge4（double x，double y []，double step）;  / * Runge-Kutta功能* / \ndouble f（double x，double y []，int i）;  / *衍生函數* / \n  \nvoid main（）{ \n  \n  double t，y [N]; \n  int j; \n  \n  output = fopen（“osc.dat”，“w”）;  / *外部文件名* / \n  output1 = fopen（“osc1.dat”，“w”）;  / *外部文件名* / \n  \n  Y [0] = 1.0;  /* 初始位置 */ \n  Y [1] = 0.0;  /* 初始速度 */ \n  \n  // fprintf（輸出，“0 \\ t％f \\ n”，y [0]）; \n  \n  for（j = 1; j * dist <= MAX; j ++）/ * time loop * / { \n  \n    噸= j的* DIST; \n    runge4（t，y，dist）; \n    fprintf（輸出，“％f \\ t％f \\ n”，t，y [0]）; \n    fprintf（output1，“％f \\ t％f \\ n”，t，y [1]）; \n  } \n  \n  FCLOSE（輸出）; \n  FCLOSE（OUTPUT1）; \n  \n  pipe = popen（“gnuplot -persist”，“w”）; \n  // fprintf（pipe，“set term png enhanced font”v：/fireflysung.ttf \\“18 \\ n”）; \n  fprintf（pipe，“set term png enhanced font”y：/wqy-microhei.ttc \\“18 \\ n”）; \n  // fprintf（pipe，“set yrange [68:70] \\ n”）; \n  fprintf（pipe，“set output \\”test.png \\“\\ n”）; \n  fprintf（管道，“plot \\”osc.dat \\“title \\”位移\\“用行，\\”osc1.dat \\“title \\”速度\\“用行\\ n”）; \n  fprintf中（管，“退出\\ n”）; \n \n  fprintf中（管，“退出\\ n”）; \n  pclose函數（管道）; \n} \n  \nvoid runge4（double x，double y []，double step）{ \n  \n  double h = step / 2.0，/ *中點* / \n  t1 [N]，t2 [N]，t3 [N]，/ *臨時存儲陣列* / \n  k1 [N]，k2 [N]，k3 [N]，k4 [N];  / *為Runge-Kutta * / \n  int i; \n  \n  for（i = 0; i <N; i ++）{ \n  \n    T1 [I] = Y [I] + 0.5 *（K1 [I] = *步驟F（X，Y，I））; \n  } \n  \n  for（i = 0; i <N; i ++）{ \n  \n    t2 [i] = y [i] + 0.5 *（k2 [i] = step * f（x + h，t1，i））; \n  } \n  \n  for（i = 0; i <N; i ++）{ \n  \n    t3 [i] = y [i] +（k3 [i] = step * f（x + h，t2，i））; \n  } \n  \n  for（i = 0; i <N; i ++）{ \n  \n    k4 [i] = step * f（x + step，t3，i）; \n  } \n  \n  for（i = 0; i <N; i ++）{ \n  \n    值Y [i] + =（K1 [1] + 2 * K 2 [I] + 2 * K 3 [I] + K4 [I]）/ 6.0; \n  } \n} \n  \ndouble f（double x，double y []，int i）{ \n  \n  if（i == 0） \n    X = Y [1];  / *第一個等式的衍生物* / \n  if（i == 1） \n    x = -y [0] -0.5 *和[1]; \n  返回x; \n} \n \n', 'tags': '', 'url': 'C或C++程式碼.html'}, {'title': 'Lua 程式碼', 'text': '-- 導入 js 模組 \njs = require（“js”） \n-- 取得window \nwindow = js.global \n-- 猜小於或等於 n 的整數 \n大= 100 \n-- 計算猜測次數, 配合 while 至少會猜一次 \nnum = 1 \n-- 利用 window:prompt 方法回應取得使用者所猜的整數 \nguess = window:prompt("請猜一個介於 1 到 "..big.." 的整數") \n-- 利用數學模組的 random 函數以亂數產生答案 \nanswer = math.random（大） \noutput =“” \n-- 若沒猜對, 一直猜到對為止 \n而回答〜= tonumber（猜測）做 \n    如果回答> tonumber（猜測）那麼 \n        output =“猜第”..num ..“次，猜=”..猜..“，答案=”......答案..“ - 太小了” \n        打印（輸出） \n    其他 \n        output =“猜第”..num ..“次，猜=”..猜..“，答案=”......答案..“ - 太大了” \n        打印（輸出） \n    結束  \n    guess = window:prompt(output..", 請猜一個介於 1 到 "..big.." 的整數") \n    NUM = NUM + 1 \n結束 \nprint("總共猜了 "..num.." 次, answer=guess="..answer.." - correct") \n     \n \n', 'tags': '', 'url': 'Lua 程式碼.html'}, {'title': 'Javascript 程式碼', 'text': "STLViewer = function（stlpath，plotarea）{ \n \n\tvar mycanvas = document.getElementById（plotarea）; \n\tvar viewer = new JSC3D.Viewer（mycanvas） \n\tvar theScene = new JSC3D.Scene; \n\t////使用默認文件初始化： \n\t// var stlpath =“../../../assets/2013-10-23/stl/box.STL” \n\t// var stlpath =“../../../assets/2013-10-23/stl/taj.stl” \n\tviewer.setParameter（'SceneUrl'，stlpath）; \n    viewer.setParameter（'InitRotationX'，20）; \n\tviewer.setParameter（'InitRotationY'，20）; \n\tviewer.setParameter（'InitRotationZ'，0）; \n\tviewer.setParameter（'ModelColor'，'＃CAA618'）; \n\tviewer.setParameter（'BackgroundColor1'，'＃FFFFFF'）; \n\tviewer.setParameter（'BackgroundColor2'，'＃383840'）; \n\tviewer.init（）; \n\tviewer.update（）; \n\t////完成初始化 \n\tvar canvas_drop = document.getElementById（'canvas-drop'） \n\t/ * var dropzone = document.getElementById（'dropzone'） \n\tdropzone.addEventListener（'dragover'，handleDragOver，false）; \n\tdropzone.addEventListener（'drop'，handleFileSelect，false）;  * / \n\tcanvas_drop.addEventListener（'dragover'，handleDragOver，false）; \n\tcanvas_drop.addEventListener（'drop'，handleFileSelect，false）; \n \n////拖放邏輯： \n\tfunction handleFileSelect（evt）{ \n\t    evt.stopPropagation（）; \n\t    evt.preventDefault（）; \n\t    var files = evt.dataTransfer.files; \n\t    執行console.log（EVT） \n\t    執行console.log（文件） \n\t    preview_stl（文件[0]） \n\t  } \n \n\t  function handleDragOver（evt）{ \n\t    evt.stopPropagation（）; \n\t    evt.preventDefault（）; \n\t    evt.dataTransfer.dropEffect ='copy'; \n\t  } \n \n//// jsc3d邏輯 \n\tvar handle_file_select = function（e）{ \n\t\te.stopPropagation（） \n\t\te.preventDefault（） \n\t\tvar f = e.target.files [0] \n\t\tpreview_stl（f） \n\t} \n \n\tfunction preview_stl（f）{ \n\t\tvar reader = new FileReader（） \n\t\tvar ext = f.name.split（“。”）[1] \n \n\t\tfunction setup_viewer（）{ \n\t\t\tviewer.setParameter（'InitRotationX'，20）; \n\t\t\tviewer.setParameter（'InitRotationY'，20）; \n\t\t\tviewer.setParameter（'InitRotationZ'，0）; \n\t\t\tviewer.setParameter（'ModelColor'，'＃CAA618'）; \n\t\t\tviewer.setParameter（'BackgroundColor1'，'＃FFFFFF'）; \n\t\t\tviewer.setParameter（'BackgroundColor2'，'＃383840'）; \n\t\t\tviewer.setParameter（'RenderMode'，“flat”）; \n\t\t} \n\t\tsetup_viewer（） \n \n\t\treader.onload =（function（file）{ \n\t\t\t返回函數（e）{ \n\t\t\t\ttheScene =新的JSC3D.Scene \n\t\t    \tstl_loader = new JSC3D.StlLoader（） \n\t\t    \tstl_loader.parseStl（theScene，e.target.result） \n\t\t      \t//viewer.init（） \n\t\t      \tviewer.replaceScene（theScene） \n\t\t      \tviewer.update（） \n\t\t      \tconsole.log（“文件閱讀器onload”） \n\t\t\t} \n\t\t}）（F） \n \n\t\tif（ext.toLowerCase（）！=“stl”）{ \n\t\t\talert（“那似乎不是一個STL文件。”）; \n\t\t} else { \n\t\t\treader.readAsBinaryString（F） \n\t\t} \n\t} \n} \n \n \n", 'tags': '', 'url': 'Javascript 程式碼.html'}, {'title': 'Html 原始碼', 'text': "<HTML> \n   <HEAD> \n      <meta http-equiv =“content-type”content =“text / html; charset = utf-8”> \n      <TITLE> CMSimfly </ TITLE> \n      <link rel =“stylesheet”type =“text / css”href =“/ static / cmsimply.css”> \n   </ HEAD> \n   <BODY> \n      <div class ='container'> \n      <NAV> \n         <ul id ='css3menu1'class ='topmenu'> \n            <li><a href='/get_page/簡介'>簡介</a> \n            <li><a href='/get_page/目錄結構'>目錄結構</a> \n            <LI> \n               <a href='/get_page/頁面編輯'>頁面編輯</a> \n               <UL> \n                  <LI> \n                     <a href='/get_page/插入程式碼'>插入程式碼</a> \n                     <UL> \n                        <li><a href='/get_page/Java 程式碼'>Java 程式碼</a> \n                        <li><a href='/get_page/Python 程式碼'>Python 程式碼</a> \n                        <li><a href='/get_page/C或C++程式碼'>C或C++程式碼</a> \n                        <li><a href='/get_page/Lua 程式碼'>Lua 程式碼</a> \n                        <li><a href='/get_page/Javascript 程式碼'>Javascript 程式碼</a> \n                        <li><a href='/get_page/Html 原始碼'>Html 原始碼</a></li> \n                        </ LI> \n                     </ UL> \n               </ UL> \n            <li><a href='/get_page/網際簡報'>網際簡報</a> \n            <li><a href='/get_page/網誌編輯'>網誌編輯</a> \n            <li><a href='/get_page/已知錯誤'>已知錯誤</a></li> \n         </ UL> \n      </ NAV> \n      <節> \n         <form method ='post'action ='/ ssavePage'> \n         <textarea class ='simply-editor'name ='page_content'cols ='''rows = '15'> <h3> Html原始碼</ h3> </ textarea> \n         <input type ='hidden'name ='page_order'value ='9'> \n         <input type ='submit'value ='save'> \n         <input type = button onClick =“location.href ='/ get_page / Html原始碼'”value ='viewpage'> \n         </ FORM> \n      </節> \n   </ BODY> \n</ HTML> \n複製到剪貼板\t \n \n", 'tags': '', 'url': 'Html 原始碼.html'}, {'title': '網際簡報', 'text': 'CMSimfly 中採用  Reveal.js  作為網際簡報, 其中的維護檔案位於 config/reveal.js, 而對應的簡報檔案則位於 reveal 目錄中. \n', 'tags': '', 'url': '網際簡報.html'}, {'title': '網誌編輯', 'text': 'CMSimfly 彩用  Pelican blog  系統, 編輯檔案位於 config/pelican.leo, 對應的 \n \xa0Markdown 原始檔案位於 markdown 目錄中, 而經 Pelican 轉換出的網誌超文件檔案則位於 blog 目錄中. \n 其餘在網誌文章中所需要的 Javascript 或 Brython 程式檔案, 則與 CMSimfly 及 Reveal.js 共用, 位於 static 目錄下. \n 上傳檔案與圖檔的引用則與 CMSimfly 架構相同. \n', 'tags': '', 'url': '網誌編輯.html'}, {'title': '已知錯誤', 'text': '全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結. \n', 'tags': '', 'url': '已知錯誤.html'}, {'title': '期中報告影片', 'text': '\n', 'tags': '', 'url': '期中報告影片.html'}, {'title': '按一下', 'text': '哥哥不要啦!~~ \n \n', 'tags': '', 'url': '按一下.html'}]};
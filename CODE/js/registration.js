$(function(){
    $.getJSON('./common/weixin.json',function(json){
        console.log(json);
        let main = document.querySelector('main');
        for(let i = 0; i < json.deptlist.length; i++){
            let ul = document.createElement('ul');
            ul.innerHTML = 
            `
                <li>${json.deptlist[i].name}</li>
            `;
            main.appendChild(ul);
            let dataa = json.deptlist[i].sub_dept;
            for(let j = 0; j < dataa.length; j++){
                    let li = document.createElement('li');
                    li.innerHTML = 
                    `   
                        <a href="outpatientService.html">
                            <div class="clearFix odiv">
                                <span class="fl">${dataa[j].name}</span>
                                <img src="images/右箭头.png" alt="" class="fr">
                            </div>
                        </a>
                    `;
                    ul.appendChild(li);
            }
            
            // $("main ul li").click( function () {
                
            //     let b = $(this).eq(0).children();
            //     // let b = $(this).children();
            //     // let a =  $(this).text();
            //     for(let i = 0; i < b.length; i++){
            //         console.log(this);
            //         (function(a){

            //         })(i)
            //     }
            //     console.log(b); 
            //     // alert(1);
            // });
            
                
        }
        // let b = document.querySelectorAll(".odiv");
        // console.log(b);
        //     for(let i = 0; i < b.length; i++){
        //         (function(a){
        //             b[a].onclick = function(){
        //                 console.log(a);
        //                 // window.location.href = 'outpatientService.html';
        //                 this.style.background = 'red';
        //                 // this.location.href = 'outpatientService.html';
                        
        //                 // 0.94rem
        //             }
        //         })(i)
        //     }
    })
})
function adjust() {
	// document.body.style.background = 'red';

	data = document.querySelectorAll("#dataList")[0]
	company_length = data.querySelectorAll("tr").length
	var odds_data = new Array(390)
	for (var i =0;i<390;i++ ){
		odds_data[i] = new Array(12)
	}
	libo_index = - 1;
	s_gap = 0.05 //define 
	b_gap = 0.1
	high_init_data = document.querySelectorAll("#divFooterFload")[0].querySelectorAll("#highFObj")[0]
	low_init_data = document.querySelectorAll("#divFooterFload")[0].querySelectorAll("#lowFObj")[0]
	high_init_win = high_init_data.querySelectorAll("td")[5].childNodes[0].nodeValue
	high_init_tie = high_init_data.querySelectorAll("td")[6].childNodes[0].nodeValue
	high_init_lose = high_init_data.querySelectorAll("td")[7].childNodes[0].nodeValue
	low_init_win = low_init_data.querySelectorAll("td")[4].childNodes[0].nodeValue
	low_init_tie = low_init_data.querySelectorAll("td")[5].childNodes[0].nodeValue
	low_init_lose = low_init_data.querySelectorAll("td")[6].childNodes[0].nodeValue

	league_name =  document.querySelector('.o_l_name2').childNodes[1].nodeValue 

	for (index = 0;index < company_length;index ++ ){
		each_data = data.querySelectorAll("tr")[index]
		// init win/tie/lose 2:3:4
		//company_name 1;init_win_rate 2/3/4 ; win_percent 5/6/7;return_rate 8;win_kelly 9/10/11 ;change_time 12;
		odds_data[index][0]  =	each_data.querySelectorAll("td")[1].childNodes[0].childNodes[0].nodeValue;
		odds_data[index][1] = each_data.querySelectorAll("td")[2].childNodes[0].nodeValue;
		odds_data[index][2] = each_data.querySelectorAll("td")[3].childNodes[0].nodeValue;
		odds_data[index][3] = each_data.querySelectorAll("td")[4].childNodes[0].nodeValue;
		odds_data[index][4] = each_data.querySelectorAll("td")[5].childNodes[0].nodeValue;
		odds_data[index][5] = each_data.querySelectorAll("td")[6].childNodes[0].nodeValue;
		odds_data[index][6] = each_data.querySelectorAll("td")[7].childNodes[0].nodeValue;
		odds_data[index][7] = each_data.querySelectorAll("td")[8].childNodes[0].nodeValue;
		odds_data[index][8] = each_data.querySelectorAll("td")[9].childNodes[0].nodeValue;
		odds_data[index][9] = each_data.querySelectorAll("td")[10].childNodes[0].nodeValue;
		odds_data[index][10] = each_data.querySelectorAll("td")[11].childNodes[0].nodeValue;
		odds_data[index][11] = each_data.querySelectorAll("td")[12].childNodes[0].nodeValue;

		console.log(odds_data[index][0]);
		// each_data.querySelectorAll("td")[8].style.backgroundColor ='Yellow';
		if (odds_data[index][0] == '立博(英国)') {
			console.log('gotcha libo');
			libo_index = index;
			libo_init_win = odds_data[index][1] ;
			libo_init_tie = odds_data[index][2] ;
			libo_init_lose = odds_data[index][3];
			libo_win_per = odds_data[index][4];
			libo_tie_per  = odds_data[index][5];
			libo_lose_per = odds_data[index][6];
			libo_return_rate = odds_data[index][7];
			libo_win_kelly = odds_data[index][8];
			libo_tie_kelly= odds_data[index][9];
			libo_lose_kelly = odds_data[index][10];
		}
		company_name = odds_data[index][0] ;
		league_adjust_company(company_name,league_name,each_data);

	}
	libo_data(libo_win_per,high_init_win,low_init_win,libo_index,5)
	libo_data(libo_tie_per,high_init_tie,low_init_tie,libo_index,6)
	libo_data(libo_lose_per,high_init_lose,low_init_lose,libo_index,7)

	for(index = 0;index < company_length;index++) {
		// console.log("")
		if (index != libo_index) {
			handle_data(odds_data[index][1],libo_init_win,index,1,odds_data[index][4],high_init_win,low_init_win,odds_data[index][7],odds_data[index][8],odds_data[index][9],odds_data[index][10]);
			handle_data(odds_data[index][2],libo_init_tie,index,2,odds_data[index][5],high_init_tie,low_init_tie,odds_data[index][7],odds_data[index][8],odds_data[index][9],odds_data[index][10]);
			handle_data(odds_data[index][3],libo_init_lose,index,3,odds_data[index][6],high_init_lose,low_init_lose,odds_data[index][7],odds_data[index][8],odds_data[index][9],odds_data[index][10]);
		}
	} 
	
	//footer part


	//the tile part :
	//j 联赛 Idaaa Sazaka 澳门 GLB victorchandler egobet




}


function league_adjust_company(company_name,league_name) {

	if (company_name == 'iddaa(土耳其)') {
		if ((league_name == '日職聯' )){ 
			each_data.querySelectorAll("td")[1].style.fontWeight ='bold' ;
			each_data.querySelectorAll("td")[1].style.backgroundColor ='Red' ;

		}

	}
	if (company_name == '澳门') {
		if (league_name == '日職聯' ) { 
			each_data.querySelectorAll("td")[1].style.fontWeight ='bold' ;
			each_data.querySelectorAll("td")[1].style.backgroundColor ='Red' ;

		}

	}

	if (company_name == 'Sazaka') {
		if ((league_name == '日職聯' )){ 
			each_data.querySelectorAll("td")[1].style.fontWeight ='bold' ;
			each_data.querySelectorAll("td")[1].style.backgroundColor ='Red' ;

		}

	}

	if (company_name == 'GLB') {
		if ((league_name == '日職聯' )){ 
			each_data.querySelectorAll("td")[1].style.fontWeight ='bold' ;
			each_data.querySelectorAll("td")[1].style.backgroundColor ='Red' ;

		}

	}

	if (company_name == 'Victor Chandler') {
		if ((league_name == '日職聯' )){ 
			each_data.querySelectorAll("td")[1].style.fontWeight ='bold' ;
			each_data.querySelectorAll("td")[1].style.backgroundColor ='Red' ;

		}

	}

	if (company_name == 'Egobet') {
		if ((league_name == '日職聯' )){ 
			each_data.querySelectorAll("td")[1].style.fontWeight ='bold' ;
			each_data.querySelectorAll("td")[1].style.backgroundColor ='Red' ;

		}

	}




}
function libo_data(libo_per,high_init,low_init,libo_index,element_index) {
	if ( libo_per > high_init*0.985 ) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[libo_index].querySelectorAll("td")[element_index].style.color ='Blue';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[libo_index].querySelectorAll("td")[element_index].style.fontWeight ='bold'
	} 
	if (libo_per  < low_init*1.015) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[libo_index].querySelectorAll("td")[element_index].style.color ='Red';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[libo_index].querySelectorAll("td")[element_index].style.fontWeight ='bold'
	}
}


function handle_data(odds_data,libo_data,index,element_index,init_per,high_init,low_init,return_rate,win_kelly,tie_kelly,lose_kelly) {
	difference_gap = odds_data - libo_data;
	// console.log(index);
	element_index = element_index + 1 ;

	// if (win_kelly )
	if (return_rate < 89.5) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[8].style.color ='Red';

	}
	if (init_per > high_init*0.985) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index+3].style.color ='Blue';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index+3].style.fontWeight ='bold'
	} 
	if (init_per < low_init*1.015) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index+3].style.color ='Red';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index+3].style.fontWeight ='bold'
	}

	/// rate part  Blue,Black,Red,Green
 	if (difference_gap > 0 ){
		if (libo_data*0.15 < difference_gap) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.color ='Green';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.fontWeight ='bold'

		}
		if (libo_data*0.15 >difference_gap  > libo_data*0.1) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.color ='Red';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.fontWeight ='bold'

		} 
	} else if (difference_gap <0) {
		if (difference_gap  < -libo_data*0.15) {
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.color ='Blue';
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.fontWeight ='bold'

		}else if ( -libo_data*0.1 >difference_gap > -libo_data*0.15) {

			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.color ='Black'
			document.querySelectorAll("#dataList")[0].querySelectorAll("tr")[index].querySelectorAll("td")[element_index].style.fontWeight ='bold'

		}
	}

}

adjust()




// data = document.querySelectorAll("#dataList")[0]
// <div style=​" margin:​0 auto;​ width:​860px;​ background-color:​#FFF" id=​"dataList">​…​</div>​
// data.querySelectorAll("#id")

// data1 = data.querySelectorAll("tr")[0]
// <tr id=​"oddstr_104">​…​</tr>​
// data1.getAttribute("id")

// 	temp= data1.querySelectorAll("td")[2]
// <td width=​"56" onclick=​"OddsHistory('/​OddsHistory.aspx?id=47241933&r1=%u7279%u91CC%u723E&r2=%u51F1%u6C99%u7F85%u9813%u696D%u9918%u968A&Company=Interwetten')​" style=​"cursor:​pointer;​">​2.50​</td>​
// temp.childNodes

// temp.childNodes[0].nodeValue
// "2.50"



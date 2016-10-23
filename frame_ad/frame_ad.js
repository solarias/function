/*jshint -W069*/

﻿(function() {



//===================================================================================================================================
//※ A. 중추 변수 & 함수 선언
//===================================================================================================================================
var $ad = {};

//IE8에 indexOf 적용
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
	var len = this.length >>> 0;

	var from = Number(arguments[1]) || 0;
	from = (from < 0) ? Math.ceil(from)
		 : Math.floor(from);
	if (from < 0)
	  from += len;

	for (; from < len; from++)
	{
	  if (from in this &&
		  this[from] === elt)
		return from;
	}
	return -1;
  };
}


//===================================================================================================================================
//※ B. 기초 정보 입력
//===================================================================================================================================
//B-1. 블로그 메인
$ad["main"] = "http://blog.naver.com/ansewo";



//===================================================================================================================================
//※ C. 관련 사이트 리스트
//===================================================================================================================================
$ad["site"] = [
	//====================================================================
	//※ C-1. 던전 앤 파이터
	//====================================================================
	{
		name:"아라드 운세",
		link:"http://solarias.github.io/dnf/fortune.html",
		type:"던전 앤 파이터",
		id:"dnf_fortune",
		blog_link:"http://blog.naver.com/ansewo/220662398108"
	},
    {
		name:"지옥파티 시뮬레이터",
		link:"http://solarias.github.io/dnf/hell2.html",
		type:"던전 앤 파이터",
		id:"dnf_hell2",
		blog_link:"http://blog.naver.com/ansewo/220622642452"
	},
	{
		name:"영웅의 항아리 시뮬레이터",
		link:"http://solarias.github.io/dnf/hero.html",
		type:"던전 앤 파이터",
		id:"dnf_hero",
		blog_link:"http://blog.naver.com/ansewo/220622652162"
	},
	{
		name:"안톤 토벌 보상 시뮬레이터 (미완성)",
		link:"http://solarias.github.io/dnf/anton.html",
		type:"던전 앤 파이터",
		id:"dnf_anton",
		blog_link:"http://blog.naver.com/ansewo/220622658643"
	},
	{
		name:"안톤 에픽 장비 항아리 시뮬레이터",
		link:"http://solarias.github.io/dnf/selfish.html",
		type:"던전 앤 파이터",
		id:"dnf_selfish",
		blog_link:"http://blog.naver.com/ansewo/220622669242"
	},
	{
		name:"칸나의 스낵 주머니 (봉인된 자물쇠)",
		link:"http://solarias.github.io/dnf/snack.html",
		type:"던전 앤 파이터",
		id:"dnf_snack",
		blog_link:"http://blog.naver.com/ansewo/220622661595"
	},
	{
		name:"강화 & 증폭 시뮬레이터",
		link:"http://solarias.github.io/dnf/gangpock.html",
		type:"던전 앤 파이터",
		id:"dnf_gangpock",
		blog_link:"http://blog.naver.com/ansewo/220622663784"
	},
	{
		name:"오늘의 던파 운세",
		link:"http://solarias.github.io/dnf_jum/normal.html",
		type:"던전 앤 파이터",
		id:"dnf_jum_normal",
		blog_link:"http://blog.naver.com/ansewo/220622674684"
	},
	{
		name:"마테카 고통 운세 스페셜",
		link:"http://solarias.github.io/dnf_jum/mateka.html",
		type:"던전 앤 파이터",
		id:"dnf_jum_mateka",
		blog_link:"http://blog.naver.com/ansewo/220622674684"
	},
	{
		name:"던파 캐릭터 사주",
		link:"http://solarias.github.io/dnf/saju.html",
		type:"던전 앤 파이터",
		id:"dnf_saju",
		blog_link:"http://blog.naver.com/ansewo/220622676935"
	},
	{
		name:"던파 이상형 월드컵",
		link:"http://solarias.github.io/dnf/worldcup.html",
		type:"던전 앤 파이터",
		id:"dnf_worldcup",
		blog_link:"http://blog.naver.com/ansewo/220622666872"
	},
	{
		name:"에픽 메이커",
		link:"http://solarias.github.io/epicMaker/index.html",
		type:"던전 앤 파이터",
		id:"dnf_epicMaker",
		blog_link:"http://blog.naver.com/ansewo/220622679923"
	},
	{
		name:"베키 어드벤처",
		link:"http://solarias.github.io/dnf/beckey.html",
		type:"던전 앤 파이터",
		id:"dnf_beckey",
		blog_link:"http://blog.naver.com/ansewo/220662398108"
	},
	//====================================================================
	//※ C-2. 일반 게임
	//====================================================================
	{
		name:"일러스트 전투력 측정기",
		link:"http://solarias.github.io/dnf/power_level.html",
		type:"일반 게임",
		id:"game_power_level",
		blog_link:"http://blog.naver.com/ansewo/220622983505"
	},
	{
		name:"MD5 일러스트 배틀",
		link:"http://solarias.github.io/illustMD5/illustMD5.html",
		type:"일반 게임",
		id:"game_illustMD5",
		blog_link:"http://blog.naver.com/ansewo/220622990916"
	},
	//====================================================================
	//※ C-3. 기타 작품
	//====================================================================
    {
		name:"피파온라인3 이적 시장 수수료 계산기",
		link:"http://solarias.github.io/dnf/FIFAcal.html",
		type:"기타 작품",
		id:"etc_fifacal",
		blog_link:"http://blog.naver.com/ansewo/220704455402"
    }
];



//===================================================================================================================================
//※ D. 태크 입력
//===================================================================================================================================
//D-0. 태그 기억용 변수
$ad["tags"] = [];

//D-1. "관련 사이트" 문구
$ad["related"] = document.createElement("p");
	$ad["related"].id = "related";
	$ad["related"].innerHTML = "관련 사이트 : ";
	//태그에 추가
	$ad["tags"].push($ad["related"]);

//D-2. 관련 사이트 리스트
$ad["dropdown"] = document.createElement("select");
	//D-2-0. 사이트 리스트 id 생성 (차후 통제용)
	$ad["dropdown"].id = "frame_ad_dropdown";
	//D-2-1. 사이트 기억용 변수
	var temp = [];
	//D-2-3. "선택하세요" 옵션 추가
	var fakeoption = document.createElement("option");
	fakeoption.text = "선택하세요";
	fakeoption.selected = "selected";
	fakeoption.disabled = "disabled";
	$ad["dropdown"].add(fakeoption);
	//D-2-3. 관련 사이트 하나씩 훑어보기
	for (var i = 0;i<$ad["site"].length;i++) {
		//a. 처음 보는 사이트 -> 그룹 개설
		if ($ad["site"][i].id != undefined && temp.indexOf($ad["site"][i].id) < 0) {
			var optgroup = document.createElement("optgroup");
			optgroup.label = $ad["site"][i].type;
			//a-1. 한번 더 훑어보기
			for (var j = 0;j<$ad["site"].length;j++) {
				//a-1-1. 현재 개설된 그룹과 같은 타입이면 -> 모조리 집어넣기
				if ($ad["site"][j].type == optgroup.label) {
					var option = document.createElement("option");
					option.value = $ad["site"][j].link;
					option.text = $ad["site"][j].name;
					//a-1-2. 현재 사이트와 동일 id -> 잠금
					if ($ad["site"][j].id == document.getElementById("frame_ad").className) {
						option.disabled = "disabled";
					}
					//a-1-3. 집어넣은 사이트 id 기억
					temp.push($ad["site"][j].id);
					optgroup.appendChild(option);
				}
			}
			//a-2. 생성한 그룹 적용
			$ad["dropdown"].appendChild(optgroup);
		}
	}
	//D-2-2. 태그에 추가
	$ad["tags"].push($ad["dropdown"]);


//D-3. 개발자 이메일
$ad["email"] = document.createElement("h2");
	$ad["email"].innerHTML = "(Contact : ansewo@naver.com)";
	$ad["tags"].push($ad["email"]);


//D-4. 타이틀 & 블로그 링크
	//D-4-1. 현재 사이트 찾아두기
	for (var i = 0;i<$ad["site"].length;i++) {
		if ($ad["site"][i].id == document.getElementById("frame_ad").className) {
			var now = $ad["site"][i];

			break;
		}
	}

	//D-4-2. 오류메시지 추가
	$ad["error"] = document.createElement("h1");
        $ad["error"].id = "frame_ad_error";
		$ad["error"].innerHTML = "오류 발생! (자세히 보기)";
		$ad["tags"].push($ad["error"]);

	//D-4-3. 블로그 추가
	$ad["blog"] = document.createElement("a");
		$ad["blog"].innerHTML = "의견 남기기";
		$ad["blog"].href = now["blog_link"];
		$ad["blog"].target = "_blank";
		$ad["tags"].push($ad["blog"]);





//===================================================================================================================================
//※ E. 태그 일괄 적용
//===================================================================================================================================
$ad["target"] = document.getElementById("frame_ad");
for (var i=0;i<$ad["tags"].length;i++) {
	$ad["target"].appendChild($ad["tags"][i]);
}



//===================================================================================================================================
//※ F. 관련 사이트 이동 함수
//===================================================================================================================================
document.getElementById("frame_ad_dropdown").onchange = function() {
	var yesno = confirm("관련 사이트로 이동하면 현재 기록이 모두 사라질 수도 있습니다.\n이동하시겠습니까?");
	if (yesno) {
		window.location.href = document.getElementById("frame_ad_dropdown").value;
	}
};

//===================================================================================================================================
//※ G. 오류 메시지 출력
//===================================================================================================================================
//차후에 추가(방법을 모르겠음)

}());

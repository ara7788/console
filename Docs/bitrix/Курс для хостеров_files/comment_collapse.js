var height = 0;

BX.ready(function(){
	var collapseNode = BX('collapse');
	if(collapseNode != null)
	{
		height = collapseNode.offsetHeight;
		var collapseBtn = BX("collapse-button");
		if(collapseBtn != null)
		{
			BX.bind(BX("collapse-button"),'click', collapseHandler);
		}
	}
});

function collapse_down(div,min,height){
	(new BX.easing({
		duration : 500,
		start:{height: height, opacity : 100},
		finish:{height: min, opacity : 0},
		transition : BX.easing.transitions.quart,
		step : function(state){
			div.style.height = state.height + 'px';
			div.style.opacity = state.opacity/100;
		},
		complete: function () {
			div.style.height = 0+'px';
			BX("collapse-button").innerHTML = '���������� �����������';
		}
	})).animate();
}
function collapse_up(div,min,height){
	(new BX.easing({
		duration : 500,
		start:{height: min, opacity : 0},
		finish:{height: height, opacity : 100},
		transition : BX.easing.transitions.quart,
		step : function(state){
			div.style.height = state.height + 'px';
			div.style.opacity = state.opacity/100;
		},
		complete: function () {
			div.style.height = 'auto';
			BX("collapse-button").innerHTML = '�������� �����������';
		}
	})).animate();
}

function collapseComment(node, state)
{
	if(typeof state == 'undefined')
	{
		state = -1;
	}

	if(node != null)
	{
		var id = node.getAttribute('data-collapse');
		//���� ������ ������� ��������� - �� ��������
		if(state != -1 && state == id)
		{
			return true;
		}

		if(id === '0'){
			node.setAttribute('data-collapse','-1');
			collapse_down(BX("collapse"),0,BX('collapse').offsetHeight);
			node.setAttribute('data-collapse','1');
		}else if(id === '1'){
			node.setAttribute('data-collapse','-1');
			collapse_up(BX("collapse"),BX('collapse').offsetHeight,height);
			node.setAttribute('data-collapse','0');
		}
	}
}

function collapseHandler(e){
	collapseComment(this);
	e.preventDefault();
}
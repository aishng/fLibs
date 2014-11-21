/** 
@jsx React.DOM 
*/

var PluralNounInput = React.createClass({

	getInitialState: function() {
		return({
			pluralInputs: []
		})
	},

  	generateInputs: function(num) {
	    var inputs = [];
	    for(var i = 0; i < num; i++) {
	      var pluralInput = "pluralInput" + i;
	      inputs.push(
	        <input
	          onKeyUp={this.logPluralNouns}
	          ref={pluralInput}
	          key={i}
	          type="text"
	          id="pluralNoun"
	          placeholder="Plural Noun"
	       	></input>
	      );
	    }
	    return inputs;
  	},

	logPluralNouns: function() {
    var plurals = [];
    for(var i = 0; i < this.props.inputs; i++) {
    	var plural = (this.refs['pluralInput' + i].state.value);
      	plurals.push(plural);
    }
    this.props.update(plurals);
    this.setState({ pluralInputs: plurals });
    console.log(this.state.pluralInputs)
  	},

	render: function() {
		var inputElements = this.generateInputs(this.props.inputs);
		return(
			<form>
				{inputElements}
			</form>
		)
	}
});

var NounInput = React.createClass({

	getInitialState: function() {
		return({
			nounInputs: []
		})
	},

  	generateInputs: function(num) {
	    var inputs = [];
	    for(var i = 0; i < num; i++) {
	      var nounInput = "nounInput" + i;
	      inputs.push(
	        <input
	          onKeyUp={this.logNouns}
	          ref={nounInput}
	          key={i}
	          type="text"
	          id="noun"
	          placeholder="Noun"
	       	></input>
	      );
	    }
	    return inputs;
  	},

	logNouns: function() {
	    var nouns = [];
	    for(var i = 0; i < this.props.inputs; i++) {
	    	var noun = (this.refs['nounInput' + i].state.value);
	      	nouns.push(noun);
	    }
	    this.props.update(nouns);
	    this.setState({ nounInputs: nouns });
	    console.log(this.state.nounInputs);
  	},

	render: function() {
		var inputElements = this.generateInputs(this.props.inputs);
		return(
			<form>
				{inputElements}
			</form>
		)
	}
});

var VerbInput = React.createClass({

	getInitialState: function() {
		return({
			verbInputs: []
		})
	},

  	generateInputs: function(num) {
	    var inputs = [];
	    for(var i = 0; i < num; i++) {
	      var verbInput = "verbInput" + i;
	      inputs.push(
	        <input
	          onKeyUp={this.logVerbs}
	          ref={verbInput}
	          key={i}
	          type="text"
	          id="verb"
	          placeholder="Verb"
	       	></input>
	      );
	    }
	    return inputs;
  	},

	logVerbs: function() {
	    var verbs = [];
	    for(var i = 0; i < this.props.inputs; i++) {
	    	var verb = (this.refs['verbInput' + i].state.value);
	      	verbs.push(verb);
	    }
	    this.props.update(verbs);
	    this.setState({ verbInputs: verbs });
	    console.log(this.state.verbInputs)
  	},


	render: function() {
		var inputElements = this.generateInputs(this.props.inputs);
		return(
			<form>
				{inputElements}
			</form>
		)
	}
});

var AdjectiveInput = React.createClass({

	getInitialState: function() {
		return({
			adjectiveInputs: []
		})
	},

  	generateInputs: function(num) {
	    var inputs = [];
	    for(var i = 0; i < num; i++) {
	      var adjectiveInput = "adjectiveInput" + i;
	      inputs.push(
	        <input
	          onKeyUp={this.logAdjective}
	          ref={adjectiveInput}
	          key={i}
	          type="text"
	          id="adjective"
	          placeholder="Adjective"
	       	></input>
	      );
	    }
	    return inputs;
  	},

	logAdjective: function() {
	    var adjectives = [];
	    for(var i = 0; i < this.props.inputs; i++) {
	    	var adjective= (this.refs['adjectiveInput' + i].state.value);
	      	adjectives.push(adjective);
	    }
	   	this.props.update(adjectives);
	    this.setState({ adjectiveInputs: adjectives });
	    console.log(this.state.adjectiveInputs);
  	},


	render: function() {
		var inputElements = this.generateInputs(this.props.inputs);
		return(
			<form>
				{inputElements}
			</form>
		)
	}
});

var StoryOne = React.createClass({
	render: function() {
		return(
			<div className="story">
				<h3 className="title">Down on the Farm</h3>
				<p>
					<p>
						<span>I spent last summer on my grandparent&rsquo;s </span>
						{this.props.inputs.userSubmitAdjectives[0]} 
						<span> farm. They raise </span>
						{this.props.inputs.userSubmitPlurals[0]}
						<span> for local food </span> 
						{this.props.inputs.userSubmitPlurals[1]}
						<span>. They also grow corn on the </span>
						{this.props.inputs.userSubmitNouns[0]}
						<span>, </span>
						{this.props.inputs.userSubmitAdjectives[1]} 
						<span> lettuce and lima </span>
						{this.props.inputs.userSubmitPlurals[2]}
						<span>. My favorite place to </span>
						{this.props.inputs.userSubmitVerbs[0]}
						<span> on the farm is the </span>
						{this.props.inputs.userSubmitAdjectives[2]} 
						<span> house where Grandfather keeps his </span>
						{this.props.inputs.userSubmitPlurals[3]}
						<span>.</span>
					</p>
					<p>
						<span>But when I visit in November, there are no </span>
						{this.props.inputs.userSubmitPlurals[4]}
						<span>! They are all gone! On Thanksgiving I anxiously await at the table. I see corn on the </span>
						{this.props.inputs.userSubmitNouns[1]}
						<span> and even the lima </span>
						{this.props.inputs.userSubmitPlurals[5]}
						<span>. I am relieved when Grandma brings out a </span>
						{this.props.inputs.userSubmitNouns[2]}
						<span> for Thanksgiving dinner!</span>
					</p>
				</p>
			</div>
		)
	}
});

var StoryTwo = React.createClass({
	render: function() {
		return(
			<div className="story">
				<h3 className="title">At the Beach</h3>
				<p>
					<p>
						<span>My best friend and I are going to the beach! We both think the beach is </span>
						{this.props.inputs.userSubmitAdjectives[0]}
						<span>! Whenever we go to the beach we make sure not to forget the </span>
						{this.props.inputs.userSubmitNouns[0]}
						<span>. We love to watch the sunrise and then </span>
						{this.props.inputs.userSubmitVerbs[0]}
						<span> for seashells. Sometimes we stop and build </span> 
						{this.props.inputs.userSubmitAdjectives[1]}
						<span> sand castles, too! </span>
					</p>
					<p>
						<span>My mom always packs us lunch. Our favorite lunch is </span>
						{this.props.inputs.userSubmitNouns[1]}
						<span> and chips. I like mine with pickles. When we are done eating, we usually </span>
						{this.props.inputs.userSubmitVerbs[1]}
						<span> in the water. Later we lay on the beach and stare at the sky. One time we saw a cloud shaped like a giant </span>
						{this.props.inputs.userSubmitNouns[2]}
						<span>!</span>
					</p>
					<p>
						<span> I love to </span>
						{this.props.inputs.userSubmitVerbs[2]}
						<span> at the beach. I hope we get to go back tomorrow!</span>
					</p>
				</p>
			</div>
		)
	}
});

var App = React.createClass({

	getInitialState: function () {
		return({
			body: "Start",
			nouns: 0,
			adjectives: 0,
			verbs: 0,
			pluralNouns: 0,
			userSubmitPlurals: [],
			userSubmitNouns: [],
			userSubmitVerbs: [],
			userSubmitAdjectives: []
		})
	},

	pickStoryOne: function () {
		this.setState({ 
			body: "1",
			nouns: 3,
			adjectives: 3,
			verbs: 1,
			pluralNouns: 6
		});
	},

	pickStoryTwo: function () {
		this.setState({ 
			body: "2",
			nouns: 3,
			adjectives: 2,
			verbs: 3,
			pluralNouns: 0
		});
	},

	userPlurals: function (plurals) {
		this.setState({ userSubmitPlurals: plurals});
	},

	userNouns: function (nouns) {
		this.setState({ userSubmitNouns: nouns});
	},

	userVerbs: function (verbs) {
		this.setState({ userSubmitVerbs: verbs});
	},

	userAdjectives: function (adjectives) {
		this.setState({ userSubmitAdjectives: adjectives});
	},

	handleSubmit: function () {
		if (this.state.body == "1") {
			this.setState({ body: "Story1"});
		}
		if (this.state.body == "2") {
			this.setState({ body: "Story2"});
		}	
	},

	render: function() {
		return(
			<div className='container'>
				<h2>Phunny Phrasal Template Word Game</h2>
					{this.state.body == "Start" ? 
						<div className="innerContainer">				
							<button onClick={this.pickStoryOne}>Story 1</button>
							<button onClick={this.pickStoryTwo}>Story 2</button>
						</div>
						: null}

					{this.state.body == "1" ? 
						<div className="innerContainer">
							<PluralNounInput update={this.userPlurals} inputs={this.state.pluralNouns} />
							<NounInput update={this.userNouns} inputs={this.state.nouns}  />
							<VerbInput update={this.userVerbs} inputs={this.state.verbs} />
							<AdjectiveInput update={this.userAdjectives} inputs={this.state.adjectives}  />
							<button onClick={this.handleSubmit}>Submit</button> 
						</div> 
						: null}	

					{this.state.body == "2" ? 
						<div className="innerContainer">
							<PluralNounInput update={this.userPlurals} inputs={this.state.pluralNouns} />
							<NounInput update={this.userNouns} inputs={this.state.nouns}  />
							<VerbInput update={this.userVerbs} inputs={this.state.verbs} />
							<AdjectiveInput update={this.userAdjectives} inputs={this.state.adjectives}  />
							<button onClick={this.handleSubmit}>Submit</button> 
						</div>
						: null}

	         		{this.state.body == "Story1" ? <StoryOne inputs={this.state} /> : null}	
	         		{this.state.body == "Story2" ? <StoryTwo inputs={this.state} /> : null}	
			</div>
		)
	}
});

React.renderComponent(
	<App />,
	document.getElementById("body")
);

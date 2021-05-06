(function (_, Kotlin, $module$_actions_core, $module$ktor_ktor_client_core_jsLegacy, $module$ktor_ktor_client_json_jsLegacy, $module$ktor_ktor_http_jsLegacy, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$path, $module$fs, $module$kotlinx_coroutines_core, $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy, $module$process, $module$_17def1782b5ee417_kotlinx_nodejs_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwUPAE = Kotlin.throwUPAE;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var info = $module$_actions_core.info;
  var setOutput = $module$_actions_core.setOutput;
  var toString = Kotlin.toString;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var startGroup = $module$_actions_core.startGroup;
  var endGroup = $module$_actions_core.endGroup;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var Unit = Kotlin.kotlin.Unit;
  var parameter = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.parameter_xadl6p$;
  var List = Kotlin.kotlin.collections.List;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var JsonFeature = $module$ktor_ktor_client_json_jsLegacy.io.ktor.client.features.json.JsonFeature;
  var set_host = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.set_host_g8iu3v$;
  var URLProtocol = $module$ktor_ktor_http_jsLegacy.io.ktor.http.URLProtocol;
  var http = $module$ktor_ktor_http_jsLegacy.io.ktor.http;
  var header = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.header_xadl6p$;
  var defaultRequest = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.features.defaultRequest_fxc3ki$;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_f0veat$;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpStatement;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var HttpResponse = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call.TypeInfo;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException_init = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException_init_61zpoe$;
  var NullableSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.NullableSerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.ArrayListSerializer;
  var Exception = Kotlin.kotlin.Exception;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var getInput = $module$_actions_core.getInput;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var internal_0 = Kotlin.kotlin.coroutines.js.internal;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var debug = $module$_actions_core.debug;
  var readFileSync = $module$fs.readFileSync;
  var ensureNotNull = Kotlin.ensureNotNull;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var supervisorScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.supervisorScope_awg8ri$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var toInstant = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.toInstant_pdl1vz$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Clock = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.Clock;
  var TimeZone = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.TimeZone;
  var DateTimeUnit = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.DateTimeUnit;
  var plus = $module$Kotlin_DateTime_library_kotlinx_datetime_js_legacy.kotlinx.datetime.plus_lr12qk$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var setFailed = $module$_actions_core.setFailed;
  var Throwable = Error;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  ActionFailedException.prototype = Object.create(Throwable.prototype);
  ActionFailedException.prototype.constructor = ActionFailedException;
  function ReleaseNoteBuilder(inputs) {
    this.inputs_0 = inputs;
    this.githubClient_9zudnk$_0 = lazy(ReleaseNoteBuilder$githubClient$lambda(this));
    this.fetchMilestoneByName_in3k8m$_0 = this.fetchMilestoneByName_in3k8m$_0;
    this.fetchLastClosedMilestone_h9gli2$_0 = this.fetchLastClosedMilestone_h9gli2$_0;
    this.pRsForMilestone_es8f5a$_0 = lazy(ReleaseNoteBuilder$pRsForMilestone$lambda(this));
    this.buildChangelog_rhi5k$_0 = lazy(ReleaseNoteBuilder$buildChangelog$lambda(this));
  }
  Object.defineProperty(ReleaseNoteBuilder.prototype, 'githubClient_0', {
    configurable: true,
    get: function () {
      return this.githubClient_9zudnk$_0.value;
    }
  });
  Object.defineProperty(ReleaseNoteBuilder.prototype, 'fetchMilestoneByName_0', {
    configurable: true,
    get: function () {
      if (this.fetchMilestoneByName_in3k8m$_0 == null)
        return throwUPAE('fetchMilestoneByName');
      return this.fetchMilestoneByName_in3k8m$_0;
    },
    set: function (fetchMilestoneByName) {
      this.fetchMilestoneByName_in3k8m$_0 = fetchMilestoneByName;
    }
  });
  Object.defineProperty(ReleaseNoteBuilder.prototype, 'fetchLastClosedMilestone_0', {
    configurable: true,
    get: function () {
      if (this.fetchLastClosedMilestone_h9gli2$_0 == null)
        return throwUPAE('fetchLastClosedMilestone');
      return this.fetchLastClosedMilestone_h9gli2$_0;
    },
    set: function (fetchLastClosedMilestone) {
      this.fetchLastClosedMilestone_h9gli2$_0 = fetchLastClosedMilestone;
    }
  });
  Object.defineProperty(ReleaseNoteBuilder.prototype, 'pRsForMilestone_0', {
    configurable: true,
    get: function () {
      return this.pRsForMilestone_es8f5a$_0.value;
    }
  });
  Object.defineProperty(ReleaseNoteBuilder.prototype, 'buildChangelog_0', {
    configurable: true,
    get: function () {
      return this.buildChangelog_rhi5k$_0.value;
    }
  });
  function Coroutine$build($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$group$result = void 0;
    this.local$group$result_0 = void 0;
  }
  Coroutine$build.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$build.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$build.prototype.constructor = Coroutine$build;
  Coroutine$build.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = this.$this.fetchMilestone_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var milestoneInfo = this.result_0;
            info('\u2139\uFE0F Milestone found with name ' + milestoneInfo.title + ', closed on ' + milestoneInfo.closedAt);
            setOutput('milestone', milestoneInfo.title);
            startGroup('\u2139\uFE0F Fetching PRs for milestone ' + milestoneInfo.title);
            this.exceptionState_0 = 8;
            this.state_0 = 2;
            this.result_0 = this.$this.pRsForMilestone_0.invoke_cw412z$(milestoneInfo.number, milestoneInfo.closedPRs, milestoneInfo.closedAt, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$group$result = this.result_0;
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [3];
            this.state_0 = 9;
            continue;
          case 3:
            var pullRequestList = this.local$group$result;
            info('\u2139\uFE0F Retrieved ' + pullRequestList.size + ' merged PRs');
            startGroup('\u2139\uFE0F Building changelog');
            this.exceptionState_0 = 6;
            this.state_0 = 4;
            this.result_0 = this.$this.buildChangelog_0.invoke_nh2p3d$(pullRequestList, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$group$result_0 = this.result_0;
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [5];
            this.state_0 = 7;
            continue;
          case 5:
            return this.local$group$result_0;
          case 6:
            this.finallyPath_0 = [10];
            this.state_0 = 7;
            continue;
          case 7:
            this.exceptionState_0 = 10;
            endGroup();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            this.finallyPath_0 = [10];
            this.state_0 = 9;
            continue;
          case 9:
            this.exceptionState_0 = 10;
            endGroup();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 10:
            throw this.exception_0;
          default:this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 10) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ReleaseNoteBuilder.prototype.build = function (continuation_0, suspended) {
    var instance = new Coroutine$build(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$fetchMilestone_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$group$result = void 0;
    this.local$group$result_0 = void 0;
  }
  Coroutine$fetchMilestone_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchMilestone_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchMilestone_0.prototype.constructor = Coroutine$fetchMilestone_0;
  Coroutine$fetchMilestone_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.inputs_0.milestone;
            if ($receiver == null || isBlank($receiver)) {
              startGroup('\u2139\uFE0F No milestone supplied, resolving from closed list');
              this.exceptionState_0 = 8;
              this.$this.fetchLastClosedMilestone_0 = new FetchLastClosedMilestone(this.$this.githubClient_0);
              this.state_0 = 5;
              this.result_0 = this.$this.fetchLastClosedMilestone_0.invoke(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              startGroup('\u2139\uFE0F Resolving milestone with name ' + toString(this.$this.inputs_0.milestone));
              this.exceptionState_0 = 3;
              this.$this.fetchMilestoneByName_0 = new FetchMilestoneByName(this.$this.githubClient_0);
              this.state_0 = 1;
              this.result_0 = this.$this.fetchMilestoneByName_0.invoke_61zpoe$(this.$this.inputs_0.milestone, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            this.local$group$result_0 = this.result_0;
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return this.local$group$result_0;
          case 3:
            this.finallyPath_0 = [10];
            this.state_0 = 4;
            continue;
          case 4:
            this.exceptionState_0 = 10;
            endGroup();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            this.local$group$result = this.result_0;
            this.exceptionState_0 = 10;
            this.finallyPath_0 = [6];
            this.state_0 = 9;
            continue;
          case 6:
            return this.local$group$result;
          case 7:
            return;
          case 8:
            this.finallyPath_0 = [10];
            this.state_0 = 9;
            continue;
          case 9:
            this.exceptionState_0 = 10;
            endGroup();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 10:
            throw this.exception_0;
          default:this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 10) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ReleaseNoteBuilder.prototype.fetchMilestone_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$fetchMilestone_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function ReleaseNoteBuilder$githubClient$lambda(this$ReleaseNoteBuilder) {
    return function () {
      return new GithubClient(this$ReleaseNoteBuilder.inputs_0.token, this$ReleaseNoteBuilder.inputs_0.owner, this$ReleaseNoteBuilder.inputs_0.repo);
    };
  }
  function ReleaseNoteBuilder$pRsForMilestone$lambda(this$ReleaseNoteBuilder) {
    return function () {
      return new GetPRsForMilestone(this$ReleaseNoteBuilder.githubClient_0);
    };
  }
  function ReleaseNoteBuilder$buildChangelog$lambda(this$ReleaseNoteBuilder) {
    return function () {
      return new BuildChangelog(this$ReleaseNoteBuilder.inputs_0);
    };
  }
  ReleaseNoteBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReleaseNoteBuilder',
    interfaces: []
  };
  function get$lambda($receiver) {
    return Unit;
  }
  function GithubClient(token, owner, repo) {
    this.owner_0 = owner;
    this.repo_0 = repo;
    this.client_vj2x0t$_0 = lazy(GithubClient$client$lambda(token));
  }
  Object.defineProperty(GithubClient.prototype, 'client_0', {
    configurable: true,
    get: function () {
      return this.client_vj2x0t$_0.value;
    }
  });
  function GithubClient$milestones$lambda$lambda(this$GithubClient) {
    return function ($receiver, it) {
      $receiver.encodedPath = '/repos/' + this$GithubClient.owner_0 + '/' + this$GithubClient.repo_0 + '/milestones';
      return Unit;
    };
  }
  function GithubClient$milestones$lambda(this$GithubClient, closure$request) {
    return function ($receiver) {
      $receiver.url_6yzzjr$(GithubClient$milestones$lambda$lambda(this$GithubClient));
      parameter($receiver, 'state', closure$request.state);
      parameter($receiver, 'direction', closure$request.direction);
      parameter($receiver, 'sort', closure$request.sort);
      parameter($receiver, 'per_page', closure$request.per_page);
      parameter($receiver, 'page', closure$request.page);
      return Unit;
    };
  }
  function Coroutine$milestones_3hfkgy$($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
    this.local$request = request_0;
  }
  Coroutine$milestones_3hfkgy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$milestones_3hfkgy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$milestones_3hfkgy$.prototype.constructor = Coroutine$milestones_3hfkgy$;
  Coroutine$milestones_3hfkgy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client_0;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body;
            GithubClient$milestones$lambda(this.$this, this.local$request)($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(List);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, List) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(List), call.JsType, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(Milestone), [], false))], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(List), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, List) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, List) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GithubClient.prototype.milestones_3hfkgy$ = function (request_0, continuation_0, suspended) {
    var instance = new Coroutine$milestones_3hfkgy$(this, request_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function GithubClient$pullRequests$lambda$lambda(this$GithubClient) {
    return function ($receiver, it) {
      $receiver.encodedPath = '/repos/' + this$GithubClient.owner_0 + '/' + this$GithubClient.repo_0 + '/pulls';
      return Unit;
    };
  }
  function GithubClient$pullRequests$lambda(this$GithubClient, closure$request) {
    return function ($receiver) {
      $receiver.url_6yzzjr$(GithubClient$pullRequests$lambda$lambda(this$GithubClient));
      parameter($receiver, 'state', closure$request.state);
      parameter($receiver, 'direction', closure$request.direction);
      parameter($receiver, 'sort', closure$request.sort);
      parameter($receiver, 'per_page', closure$request.per_page);
      parameter($receiver, 'page', closure$request.page);
      return Unit;
    };
  }
  function Coroutine$pullRequests_3hfkgy$($this, request_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
    this.local$request = request_0;
  }
  Coroutine$pullRequests_3hfkgy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$pullRequests_3hfkgy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$pullRequests_3hfkgy$.prototype.constructor = Coroutine$pullRequests_3hfkgy$;
  Coroutine$pullRequests_3hfkgy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client_0;
            var host;
            var body;
            host = 'localhost';
            body = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body;
            GithubClient$pullRequests$lambda(this.$this, this.local$request)($receiver_1);
            var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
            var tmp$_4, tmp$_5, tmp$_6;
            tmp$_4 = getKClass(List);
            if (equals(tmp$_4, getKClass(HttpStatement_init))) {
              this.result_0 = Kotlin.isType(tmp$_5 = $this_0, List) ? tmp$_5 : throwCCE();
              this.state_0 = 9;
              continue;
            } else {
              if (equals(tmp$_4, getKClass(HttpResponse))) {
                this.state_0 = 7;
                this.result_0 = $this_0.execute(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              } else {
                this.state_0 = 1;
                this.result_0 = $this_0.executeUnsafe(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(getKClass(List), call.JsType, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(getKClass(PullRequest), [], false))], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(getKClass(List), call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = Kotlin.isType(tmp$_7 = this.result_0, List) ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = Kotlin.isType(tmp$_6 = this.result_0, List) ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GithubClient.prototype.pullRequests_3hfkgy$ = function (request_0, continuation_0, suspended) {
    var instance = new Coroutine$pullRequests_3hfkgy$(this, request_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function GithubClient$client$lambda$lambda$lambda$lambda($receiver, it) {
    $receiver.protocol = URLProtocol.Companion.HTTPS;
    return Unit;
  }
  function GithubClient$client$lambda$lambda$lambda(closure$token) {
    return function ($receiver) {
      set_host($receiver, 'api.github.com');
      $receiver.url_6yzzjr$(GithubClient$client$lambda$lambda$lambda$lambda);
      header($receiver, http.HttpHeaders.Authorization, 'token ' + closure$token);
      header($receiver, http.HttpHeaders.Accept, 'application/vnd.github.v3+json');
      return Unit;
    };
  }
  function GithubClient$client$lambda$lambda(closure$token) {
    return function ($receiver) {
      $receiver.install_xlxg29$(JsonFeature.Feature);
      defaultRequest($receiver, GithubClient$client$lambda$lambda$lambda(closure$token));
      return Unit;
    };
  }
  function GithubClient$client$lambda(closure$token) {
    return function () {
      return HttpClient(GithubClient$client$lambda$lambda(closure$token));
    };
  }
  GithubClient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GithubClient',
    interfaces: []
  };
  function MilestoneRequest(state, direction, sort, per_page, page) {
    MilestoneRequest$Companion_getInstance();
    if (state === void 0)
      state = 'all';
    if (direction === void 0)
      direction = 'desc';
    if (sort === void 0)
      sort = 'completeness';
    if (per_page === void 0)
      per_page = 50;
    if (page === void 0)
      page = 1;
    this.state = state;
    this.direction = direction;
    this.sort = sort;
    this.per_page = per_page;
    this.page = page;
  }
  function MilestoneRequest$Companion() {
    MilestoneRequest$Companion_instance = this;
    this.DEFAULT_PAGE_SIZE = 50;
  }
  MilestoneRequest$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MilestoneRequest$Companion_instance = null;
  function MilestoneRequest$Companion_getInstance() {
    if (MilestoneRequest$Companion_instance === null) {
      new MilestoneRequest$Companion();
    }return MilestoneRequest$Companion_instance;
  }
  MilestoneRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MilestoneRequest',
    interfaces: []
  };
  MilestoneRequest.prototype.component1 = function () {
    return this.state;
  };
  MilestoneRequest.prototype.component2 = function () {
    return this.direction;
  };
  MilestoneRequest.prototype.component3 = function () {
    return this.sort;
  };
  MilestoneRequest.prototype.component4 = function () {
    return this.per_page;
  };
  MilestoneRequest.prototype.component5 = function () {
    return this.page;
  };
  MilestoneRequest.prototype.copy_cfnaqq$ = function (state, direction, sort, per_page, page) {
    return new MilestoneRequest(state === void 0 ? this.state : state, direction === void 0 ? this.direction : direction, sort === void 0 ? this.sort : sort, per_page === void 0 ? this.per_page : per_page, page === void 0 ? this.page : page);
  };
  MilestoneRequest.prototype.toString = function () {
    return 'MilestoneRequest(state=' + Kotlin.toString(this.state) + (', direction=' + Kotlin.toString(this.direction)) + (', sort=' + Kotlin.toString(this.sort)) + (', per_page=' + Kotlin.toString(this.per_page)) + (', page=' + Kotlin.toString(this.page)) + ')';
  };
  MilestoneRequest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.direction) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    result = result * 31 + Kotlin.hashCode(this.per_page) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    return result;
  };
  MilestoneRequest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.direction, other.direction) && Kotlin.equals(this.sort, other.sort) && Kotlin.equals(this.per_page, other.per_page) && Kotlin.equals(this.page, other.page)))));
  };
  function GithubUser(avatar_url, events_url, followers_url, following_url, gists_url, gravatar_id, html_url, id, login, node_id, organizations_url, received_events_url, repos_url, site_admin, starred_url, subscriptions_url, type, url) {
    GithubUser$Companion_getInstance();
    this.avatar_url = avatar_url;
    this.events_url = events_url;
    this.followers_url = followers_url;
    this.following_url = following_url;
    this.gists_url = gists_url;
    this.gravatar_id = gravatar_id;
    this.html_url = html_url;
    this.id = id;
    this.login = login;
    this.node_id = node_id;
    this.organizations_url = organizations_url;
    this.received_events_url = received_events_url;
    this.repos_url = repos_url;
    this.site_admin = site_admin;
    this.starred_url = starred_url;
    this.subscriptions_url = subscriptions_url;
    this.type = type;
    this.url = url;
  }
  function GithubUser$Companion() {
    GithubUser$Companion_instance = this;
  }
  GithubUser$Companion.prototype.serializer = function () {
    return GithubUser$$serializer_getInstance();
  };
  GithubUser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GithubUser$Companion_instance = null;
  function GithubUser$Companion_getInstance() {
    if (GithubUser$Companion_instance === null) {
      new GithubUser$Companion();
    }return GithubUser$Companion_instance;
  }
  function GithubUser$$serializer() {
    this.descriptor_az1sos$_0 = new PluginGeneratedSerialDescriptor('data.response.GithubUser', this, 18);
    this.descriptor.addElement_ivxn3r$('avatar_url', false);
    this.descriptor.addElement_ivxn3r$('events_url', false);
    this.descriptor.addElement_ivxn3r$('followers_url', false);
    this.descriptor.addElement_ivxn3r$('following_url', false);
    this.descriptor.addElement_ivxn3r$('gists_url', false);
    this.descriptor.addElement_ivxn3r$('gravatar_id', false);
    this.descriptor.addElement_ivxn3r$('html_url', false);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('login', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('organizations_url', false);
    this.descriptor.addElement_ivxn3r$('received_events_url', false);
    this.descriptor.addElement_ivxn3r$('repos_url', false);
    this.descriptor.addElement_ivxn3r$('site_admin', false);
    this.descriptor.addElement_ivxn3r$('starred_url', false);
    this.descriptor.addElement_ivxn3r$('subscriptions_url', false);
    this.descriptor.addElement_ivxn3r$('type', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    GithubUser$$serializer_instance = this;
  }
  Object.defineProperty(GithubUser$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_az1sos$_0;
    }
  });
  GithubUser$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.avatar_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.events_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.followers_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.following_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.gists_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.gravatar_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 6, value.html_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 7, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.login);
    output.encodeStringElement_iij8qq$(this.descriptor, 9, value.node_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 10, value.organizations_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 11, value.received_events_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 12, value.repos_url);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 13, value.site_admin);
    output.encodeStringElement_iij8qq$(this.descriptor, 14, value.starred_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 15, value.subscriptions_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 16, value.type);
    output.encodeStringElement_iij8qq$(this.descriptor, 17, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  GithubUser$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15
    , local16
    , local17;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeIntElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeStringElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeStringElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case 11:
          local11 = input.decodeStringElement_szpzho$(this.descriptor, 11);
          bitMask0 |= 2048;
          break;
        case 12:
          local12 = input.decodeStringElement_szpzho$(this.descriptor, 12);
          bitMask0 |= 4096;
          break;
        case 13:
          local13 = input.decodeBooleanElement_szpzho$(this.descriptor, 13);
          bitMask0 |= 8192;
          break;
        case 14:
          local14 = input.decodeStringElement_szpzho$(this.descriptor, 14);
          bitMask0 |= 16384;
          break;
        case 15:
          local15 = input.decodeStringElement_szpzho$(this.descriptor, 15);
          bitMask0 |= 32768;
          break;
        case 16:
          local16 = input.decodeStringElement_szpzho$(this.descriptor, 16);
          bitMask0 |= 65536;
          break;
        case 17:
          local17 = input.decodeStringElement_szpzho$(this.descriptor, 17);
          bitMask0 |= 131072;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return GithubUser_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, local16, local17, null);
  };
  GithubUser$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  GithubUser$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var GithubUser$$serializer_instance = null;
  function GithubUser$$serializer_getInstance() {
    if (GithubUser$$serializer_instance === null) {
      new GithubUser$$serializer();
    }return GithubUser$$serializer_instance;
  }
  function GithubUser_init(seen1, avatar_url, events_url, followers_url, following_url, gists_url, gravatar_id, html_url, id, login, node_id, organizations_url, received_events_url, repos_url, site_admin, starred_url, subscriptions_url, type, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(GithubUser.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('avatar_url');
    else
      $this.avatar_url = avatar_url;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('events_url');
    else
      $this.events_url = events_url;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('followers_url');
    else
      $this.followers_url = followers_url;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('following_url');
    else
      $this.following_url = following_url;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('gists_url');
    else
      $this.gists_url = gists_url;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('gravatar_id');
    else
      $this.gravatar_id = gravatar_id;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('html_url');
    else
      $this.html_url = html_url;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('login');
    else
      $this.login = login;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('organizations_url');
    else
      $this.organizations_url = organizations_url;
    if ((seen1 & 2048) === 0)
      throw MissingFieldException_init('received_events_url');
    else
      $this.received_events_url = received_events_url;
    if ((seen1 & 4096) === 0)
      throw MissingFieldException_init('repos_url');
    else
      $this.repos_url = repos_url;
    if ((seen1 & 8192) === 0)
      throw MissingFieldException_init('site_admin');
    else
      $this.site_admin = site_admin;
    if ((seen1 & 16384) === 0)
      throw MissingFieldException_init('starred_url');
    else
      $this.starred_url = starred_url;
    if ((seen1 & 32768) === 0)
      throw MissingFieldException_init('subscriptions_url');
    else
      $this.subscriptions_url = subscriptions_url;
    if ((seen1 & 65536) === 0)
      throw MissingFieldException_init('type');
    else
      $this.type = type;
    if ((seen1 & 131072) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  GithubUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GithubUser',
    interfaces: []
  };
  GithubUser.prototype.component1 = function () {
    return this.avatar_url;
  };
  GithubUser.prototype.component2 = function () {
    return this.events_url;
  };
  GithubUser.prototype.component3 = function () {
    return this.followers_url;
  };
  GithubUser.prototype.component4 = function () {
    return this.following_url;
  };
  GithubUser.prototype.component5 = function () {
    return this.gists_url;
  };
  GithubUser.prototype.component6 = function () {
    return this.gravatar_id;
  };
  GithubUser.prototype.component7 = function () {
    return this.html_url;
  };
  GithubUser.prototype.component8 = function () {
    return this.id;
  };
  GithubUser.prototype.component9 = function () {
    return this.login;
  };
  GithubUser.prototype.component10 = function () {
    return this.node_id;
  };
  GithubUser.prototype.component11 = function () {
    return this.organizations_url;
  };
  GithubUser.prototype.component12 = function () {
    return this.received_events_url;
  };
  GithubUser.prototype.component13 = function () {
    return this.repos_url;
  };
  GithubUser.prototype.component14 = function () {
    return this.site_admin;
  };
  GithubUser.prototype.component15 = function () {
    return this.starred_url;
  };
  GithubUser.prototype.component16 = function () {
    return this.subscriptions_url;
  };
  GithubUser.prototype.component17 = function () {
    return this.type;
  };
  GithubUser.prototype.component18 = function () {
    return this.url;
  };
  GithubUser.prototype.copy_7t9r8v$ = function (avatar_url, events_url, followers_url, following_url, gists_url, gravatar_id, html_url, id, login, node_id, organizations_url, received_events_url, repos_url, site_admin, starred_url, subscriptions_url, type, url) {
    return new GithubUser(avatar_url === void 0 ? this.avatar_url : avatar_url, events_url === void 0 ? this.events_url : events_url, followers_url === void 0 ? this.followers_url : followers_url, following_url === void 0 ? this.following_url : following_url, gists_url === void 0 ? this.gists_url : gists_url, gravatar_id === void 0 ? this.gravatar_id : gravatar_id, html_url === void 0 ? this.html_url : html_url, id === void 0 ? this.id : id, login === void 0 ? this.login : login, node_id === void 0 ? this.node_id : node_id, organizations_url === void 0 ? this.organizations_url : organizations_url, received_events_url === void 0 ? this.received_events_url : received_events_url, repos_url === void 0 ? this.repos_url : repos_url, site_admin === void 0 ? this.site_admin : site_admin, starred_url === void 0 ? this.starred_url : starred_url, subscriptions_url === void 0 ? this.subscriptions_url : subscriptions_url, type === void 0 ? this.type : type, url === void 0 ? this.url : url);
  };
  GithubUser.prototype.toString = function () {
    return 'GithubUser(avatar_url=' + Kotlin.toString(this.avatar_url) + (', events_url=' + Kotlin.toString(this.events_url)) + (', followers_url=' + Kotlin.toString(this.followers_url)) + (', following_url=' + Kotlin.toString(this.following_url)) + (', gists_url=' + Kotlin.toString(this.gists_url)) + (', gravatar_id=' + Kotlin.toString(this.gravatar_id)) + (', html_url=' + Kotlin.toString(this.html_url)) + (', id=' + Kotlin.toString(this.id)) + (', login=' + Kotlin.toString(this.login)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', organizations_url=' + Kotlin.toString(this.organizations_url)) + (', received_events_url=' + Kotlin.toString(this.received_events_url)) + (', repos_url=' + Kotlin.toString(this.repos_url)) + (', site_admin=' + Kotlin.toString(this.site_admin)) + (', starred_url=' + Kotlin.toString(this.starred_url)) + (', subscriptions_url=' + Kotlin.toString(this.subscriptions_url)) + (', type=' + Kotlin.toString(this.type)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  GithubUser.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.avatar_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.events_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.followers_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.following_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.gists_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.gravatar_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.html_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.login) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.organizations_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.received_events_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.repos_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.site_admin) | 0;
    result = result * 31 + Kotlin.hashCode(this.starred_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.subscriptions_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  GithubUser.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.avatar_url, other.avatar_url) && Kotlin.equals(this.events_url, other.events_url) && Kotlin.equals(this.followers_url, other.followers_url) && Kotlin.equals(this.following_url, other.following_url) && Kotlin.equals(this.gists_url, other.gists_url) && Kotlin.equals(this.gravatar_id, other.gravatar_id) && Kotlin.equals(this.html_url, other.html_url) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.login, other.login) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.organizations_url, other.organizations_url) && Kotlin.equals(this.received_events_url, other.received_events_url) && Kotlin.equals(this.repos_url, other.repos_url) && Kotlin.equals(this.site_admin, other.site_admin) && Kotlin.equals(this.starred_url, other.starred_url) && Kotlin.equals(this.subscriptions_url, other.subscriptions_url) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.url, other.url)))));
  };
  function Milestone(closed_at, closed_issues, created_at, creator, description, due_on, html_url, id, labels_url, node_id, number, open_issues, state, title, updated_at, url) {
    Milestone$Companion_getInstance();
    this.closed_at = closed_at;
    this.closed_issues = closed_issues;
    this.created_at = created_at;
    this.creator = creator;
    this.description = description;
    this.due_on = due_on;
    this.html_url = html_url;
    this.id = id;
    this.labels_url = labels_url;
    this.node_id = node_id;
    this.number = number;
    this.open_issues = open_issues;
    this.state = state;
    this.title = title;
    this.updated_at = updated_at;
    this.url = url;
  }
  function Milestone$Companion() {
    Milestone$Companion_instance = this;
  }
  Milestone$Companion.prototype.serializer = function () {
    return Milestone$$serializer_getInstance();
  };
  Milestone$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Milestone$Companion_instance = null;
  function Milestone$Companion_getInstance() {
    if (Milestone$Companion_instance === null) {
      new Milestone$Companion();
    }return Milestone$Companion_instance;
  }
  function Milestone$$serializer() {
    this.descriptor_s0nvf8$_0 = new PluginGeneratedSerialDescriptor('data.response.Milestone', this, 16);
    this.descriptor.addElement_ivxn3r$('closed_at', false);
    this.descriptor.addElement_ivxn3r$('closed_issues', false);
    this.descriptor.addElement_ivxn3r$('created_at', false);
    this.descriptor.addElement_ivxn3r$('creator', false);
    this.descriptor.addElement_ivxn3r$('description', false);
    this.descriptor.addElement_ivxn3r$('due_on', false);
    this.descriptor.addElement_ivxn3r$('html_url', false);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('labels_url', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('number', false);
    this.descriptor.addElement_ivxn3r$('open_issues', false);
    this.descriptor.addElement_ivxn3r$('state', false);
    this.descriptor.addElement_ivxn3r$('title', false);
    this.descriptor.addElement_ivxn3r$('updated_at', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    Milestone$$serializer_instance = this;
  }
  Object.defineProperty(Milestone$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_s0nvf8$_0;
    }
  });
  Milestone$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.closed_at);
    output.encodeIntElement_ptg7oe$(this.descriptor, 1, value.closed_issues);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.created_at);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 3, GithubUser$$serializer_getInstance(), value.creator);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.description);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.due_on);
    output.encodeStringElement_iij8qq$(this.descriptor, 6, value.html_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 7, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.labels_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 9, value.node_id);
    output.encodeIntElement_ptg7oe$(this.descriptor, 10, value.number);
    output.encodeIntElement_ptg7oe$(this.descriptor, 11, value.open_issues);
    output.encodeStringElement_iij8qq$(this.descriptor, 12, value.state);
    output.encodeStringElement_iij8qq$(this.descriptor, 13, value.title);
    output.encodeStringElement_iij8qq$(this.descriptor, 14, value.updated_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 15, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  Milestone$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeIntElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeSerializableElement_12e8id$(this.descriptor, 3, GithubUser$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeIntElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeStringElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeIntElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case 11:
          local11 = input.decodeIntElement_szpzho$(this.descriptor, 11);
          bitMask0 |= 2048;
          break;
        case 12:
          local12 = input.decodeStringElement_szpzho$(this.descriptor, 12);
          bitMask0 |= 4096;
          break;
        case 13:
          local13 = input.decodeStringElement_szpzho$(this.descriptor, 13);
          bitMask0 |= 8192;
          break;
        case 14:
          local14 = input.decodeStringElement_szpzho$(this.descriptor, 14);
          bitMask0 |= 16384;
          break;
        case 15:
          local15 = input.decodeStringElement_szpzho$(this.descriptor, 15);
          bitMask0 |= 32768;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Milestone_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, null);
  };
  Milestone$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, GithubUser$$serializer_getInstance(), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  Milestone$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Milestone$$serializer_instance = null;
  function Milestone$$serializer_getInstance() {
    if (Milestone$$serializer_instance === null) {
      new Milestone$$serializer();
    }return Milestone$$serializer_instance;
  }
  function Milestone_init(seen1, closed_at, closed_issues, created_at, creator, description, due_on, html_url, id, labels_url, node_id, number, open_issues, state, title, updated_at, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Milestone.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('closed_at');
    else
      $this.closed_at = closed_at;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('closed_issues');
    else
      $this.closed_issues = closed_issues;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('created_at');
    else
      $this.created_at = created_at;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('creator');
    else
      $this.creator = creator;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('description');
    else
      $this.description = description;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('due_on');
    else
      $this.due_on = due_on;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('html_url');
    else
      $this.html_url = html_url;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('labels_url');
    else
      $this.labels_url = labels_url;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('number');
    else
      $this.number = number;
    if ((seen1 & 2048) === 0)
      throw MissingFieldException_init('open_issues');
    else
      $this.open_issues = open_issues;
    if ((seen1 & 4096) === 0)
      throw MissingFieldException_init('state');
    else
      $this.state = state;
    if ((seen1 & 8192) === 0)
      throw MissingFieldException_init('title');
    else
      $this.title = title;
    if ((seen1 & 16384) === 0)
      throw MissingFieldException_init('updated_at');
    else
      $this.updated_at = updated_at;
    if ((seen1 & 32768) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  Milestone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Milestone',
    interfaces: []
  };
  Milestone.prototype.component1 = function () {
    return this.closed_at;
  };
  Milestone.prototype.component2 = function () {
    return this.closed_issues;
  };
  Milestone.prototype.component3 = function () {
    return this.created_at;
  };
  Milestone.prototype.component4 = function () {
    return this.creator;
  };
  Milestone.prototype.component5 = function () {
    return this.description;
  };
  Milestone.prototype.component6 = function () {
    return this.due_on;
  };
  Milestone.prototype.component7 = function () {
    return this.html_url;
  };
  Milestone.prototype.component8 = function () {
    return this.id;
  };
  Milestone.prototype.component9 = function () {
    return this.labels_url;
  };
  Milestone.prototype.component10 = function () {
    return this.node_id;
  };
  Milestone.prototype.component11 = function () {
    return this.number;
  };
  Milestone.prototype.component12 = function () {
    return this.open_issues;
  };
  Milestone.prototype.component13 = function () {
    return this.state;
  };
  Milestone.prototype.component14 = function () {
    return this.title;
  };
  Milestone.prototype.component15 = function () {
    return this.updated_at;
  };
  Milestone.prototype.component16 = function () {
    return this.url;
  };
  Milestone.prototype.copy_wh1z4t$ = function (closed_at, closed_issues, created_at, creator, description, due_on, html_url, id, labels_url, node_id, number, open_issues, state, title, updated_at, url) {
    return new Milestone(closed_at === void 0 ? this.closed_at : closed_at, closed_issues === void 0 ? this.closed_issues : closed_issues, created_at === void 0 ? this.created_at : created_at, creator === void 0 ? this.creator : creator, description === void 0 ? this.description : description, due_on === void 0 ? this.due_on : due_on, html_url === void 0 ? this.html_url : html_url, id === void 0 ? this.id : id, labels_url === void 0 ? this.labels_url : labels_url, node_id === void 0 ? this.node_id : node_id, number === void 0 ? this.number : number, open_issues === void 0 ? this.open_issues : open_issues, state === void 0 ? this.state : state, title === void 0 ? this.title : title, updated_at === void 0 ? this.updated_at : updated_at, url === void 0 ? this.url : url);
  };
  Milestone.prototype.toString = function () {
    return 'Milestone(closed_at=' + Kotlin.toString(this.closed_at) + (', closed_issues=' + Kotlin.toString(this.closed_issues)) + (', created_at=' + Kotlin.toString(this.created_at)) + (', creator=' + Kotlin.toString(this.creator)) + (', description=' + Kotlin.toString(this.description)) + (', due_on=' + Kotlin.toString(this.due_on)) + (', html_url=' + Kotlin.toString(this.html_url)) + (', id=' + Kotlin.toString(this.id)) + (', labels_url=' + Kotlin.toString(this.labels_url)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', number=' + Kotlin.toString(this.number)) + (', open_issues=' + Kotlin.toString(this.open_issues)) + (', state=' + Kotlin.toString(this.state)) + (', title=' + Kotlin.toString(this.title)) + (', updated_at=' + Kotlin.toString(this.updated_at)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Milestone.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.closed_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.closed_issues) | 0;
    result = result * 31 + Kotlin.hashCode(this.created_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.creator) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.due_on) | 0;
    result = result * 31 + Kotlin.hashCode(this.html_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.labels_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.open_issues) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.updated_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Milestone.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.closed_at, other.closed_at) && Kotlin.equals(this.closed_issues, other.closed_issues) && Kotlin.equals(this.created_at, other.created_at) && Kotlin.equals(this.creator, other.creator) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.due_on, other.due_on) && Kotlin.equals(this.html_url, other.html_url) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.labels_url, other.labels_url) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.open_issues, other.open_issues) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.updated_at, other.updated_at) && Kotlin.equals(this.url, other.url)))));
  };
  function PullRequest(_links, active_lock_reason, assignee, assignees, author_association, auto_merge, base, body, closed_at, comments_url, commits_url, created_at, diff_url, draft, head, html_url, id, issue_url, labels, locked, merge_commit_sha, merged_at, milestone, node_id, number, patch_url, requested_reviewers, requested_teams, review_comment_url, review_comments_url, state, statuses_url, title, updated_at, url, user) {
    PullRequest$Companion_getInstance();
    this._links = _links;
    this.active_lock_reason = active_lock_reason;
    this.assignee = assignee;
    this.assignees = assignees;
    this.author_association = author_association;
    this.auto_merge = auto_merge;
    this.base = base;
    this.body = body;
    this.closed_at = closed_at;
    this.comments_url = comments_url;
    this.commits_url = commits_url;
    this.created_at = created_at;
    this.diff_url = diff_url;
    this.draft = draft;
    this.head = head;
    this.html_url = html_url;
    this.id = id;
    this.issue_url = issue_url;
    this.labels = labels;
    this.locked = locked;
    this.merge_commit_sha = merge_commit_sha;
    this.merged_at = merged_at;
    this.milestone = milestone;
    this.node_id = node_id;
    this.number = number;
    this.patch_url = patch_url;
    this.requested_reviewers = requested_reviewers;
    this.requested_teams = requested_teams;
    this.review_comment_url = review_comment_url;
    this.review_comments_url = review_comments_url;
    this.state = state;
    this.statuses_url = statuses_url;
    this.title = title;
    this.updated_at = updated_at;
    this.url = url;
    this.user = user;
  }
  function PullRequest$Links(comments, commits, html, issue, review_comment, review_comments, self_0, statuses) {
    PullRequest$Links$Companion_getInstance();
    this.comments = comments;
    this.commits = commits;
    this.html = html;
    this.issue = issue;
    this.review_comment = review_comment;
    this.review_comments = review_comments;
    this.self = self_0;
    this.statuses = statuses;
  }
  function PullRequest$Links$LinkHref(href) {
    PullRequest$Links$LinkHref$Companion_getInstance();
    this.href = href;
  }
  function PullRequest$Links$LinkHref$Companion() {
    PullRequest$Links$LinkHref$Companion_instance = this;
  }
  PullRequest$Links$LinkHref$Companion.prototype.serializer = function () {
    return PullRequest$Links$LinkHref$$serializer_getInstance();
  };
  PullRequest$Links$LinkHref$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Links$LinkHref$Companion_instance = null;
  function PullRequest$Links$LinkHref$Companion_getInstance() {
    if (PullRequest$Links$LinkHref$Companion_instance === null) {
      new PullRequest$Links$LinkHref$Companion();
    }return PullRequest$Links$LinkHref$Companion_instance;
  }
  function PullRequest$Links$LinkHref$$serializer() {
    this.descriptor_4t85hw$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Links.LinkHref', this, 1);
    this.descriptor.addElement_ivxn3r$('href', false);
    PullRequest$Links$LinkHref$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Links$LinkHref$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_4t85hw$_0;
    }
  });
  PullRequest$Links$LinkHref$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.href);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Links$LinkHref$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$Links$PullRequest$Links$LinkHref_init(bitMask0, local0, null);
  };
  PullRequest$Links$LinkHref$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer];
  };
  PullRequest$Links$LinkHref$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Links$LinkHref$$serializer_instance = null;
  function PullRequest$Links$LinkHref$$serializer_getInstance() {
    if (PullRequest$Links$LinkHref$$serializer_instance === null) {
      new PullRequest$Links$LinkHref$$serializer();
    }return PullRequest$Links$LinkHref$$serializer_instance;
  }
  function PullRequest$Links$PullRequest$Links$LinkHref_init(seen1, href, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Links$LinkHref.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('href');
    else
      $this.href = href;
    return $this;
  }
  PullRequest$Links$LinkHref.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkHref',
    interfaces: []
  };
  PullRequest$Links$LinkHref.prototype.component1 = function () {
    return this.href;
  };
  PullRequest$Links$LinkHref.prototype.copy_61zpoe$ = function (href) {
    return new PullRequest$Links$LinkHref(href === void 0 ? this.href : href);
  };
  PullRequest$Links$LinkHref.prototype.toString = function () {
    return 'LinkHref(href=' + Kotlin.toString(this.href) + ')';
  };
  PullRequest$Links$LinkHref.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.href) | 0;
    return result;
  };
  PullRequest$Links$LinkHref.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.href, other.href))));
  };
  function PullRequest$Links$Companion() {
    PullRequest$Links$Companion_instance = this;
  }
  PullRequest$Links$Companion.prototype.serializer = function () {
    return PullRequest$Links$$serializer_getInstance();
  };
  PullRequest$Links$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Links$Companion_instance = null;
  function PullRequest$Links$Companion_getInstance() {
    if (PullRequest$Links$Companion_instance === null) {
      new PullRequest$Links$Companion();
    }return PullRequest$Links$Companion_instance;
  }
  function PullRequest$Links$$serializer() {
    this.descriptor_ob7aq7$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Links', this, 8);
    this.descriptor.addElement_ivxn3r$('comments', false);
    this.descriptor.addElement_ivxn3r$('commits', false);
    this.descriptor.addElement_ivxn3r$('html', false);
    this.descriptor.addElement_ivxn3r$('issue', false);
    this.descriptor.addElement_ivxn3r$('review_comment', false);
    this.descriptor.addElement_ivxn3r$('review_comments', false);
    this.descriptor.addElement_ivxn3r$('self', false);
    this.descriptor.addElement_ivxn3r$('statuses', false);
    PullRequest$Links$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Links$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ob7aq7$_0;
    }
  });
  PullRequest$Links$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, PullRequest$Links$LinkHref$$serializer_getInstance(), value.comments);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, PullRequest$Links$LinkHref$$serializer_getInstance(), value.commits);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, PullRequest$Links$LinkHref$$serializer_getInstance(), value.html);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 3, PullRequest$Links$LinkHref$$serializer_getInstance(), value.issue);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, PullRequest$Links$LinkHref$$serializer_getInstance(), value.review_comment);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 5, PullRequest$Links$LinkHref$$serializer_getInstance(), value.review_comments);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, PullRequest$Links$LinkHref$$serializer_getInstance(), value.self);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 7, PullRequest$Links$LinkHref$$serializer_getInstance(), value.statuses);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Links$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, PullRequest$Links$LinkHref$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, PullRequest$Links$LinkHref$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, PullRequest$Links$LinkHref$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeSerializableElement_12e8id$(this.descriptor, 3, PullRequest$Links$LinkHref$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, PullRequest$Links$LinkHref$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeSerializableElement_12e8id$(this.descriptor, 5, PullRequest$Links$LinkHref$$serializer_getInstance(), local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, PullRequest$Links$LinkHref$$serializer_getInstance(), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeSerializableElement_12e8id$(this.descriptor, 7, PullRequest$Links$LinkHref$$serializer_getInstance(), local7);
          bitMask0 |= 128;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$PullRequest$Links_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, null);
  };
  PullRequest$Links$$serializer.prototype.childSerializers = function () {
    return [PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance(), PullRequest$Links$LinkHref$$serializer_getInstance()];
  };
  PullRequest$Links$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Links$$serializer_instance = null;
  function PullRequest$Links$$serializer_getInstance() {
    if (PullRequest$Links$$serializer_instance === null) {
      new PullRequest$Links$$serializer();
    }return PullRequest$Links$$serializer_instance;
  }
  function PullRequest$PullRequest$Links_init(seen1, comments, commits, html, issue, review_comment, review_comments, self_0, statuses, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Links.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('comments');
    else
      $this.comments = comments;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('commits');
    else
      $this.commits = commits;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('html');
    else
      $this.html = html;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('issue');
    else
      $this.issue = issue;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('review_comment');
    else
      $this.review_comment = review_comment;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('review_comments');
    else
      $this.review_comments = review_comments;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('self');
    else
      $this.self = self_0;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('statuses');
    else
      $this.statuses = statuses;
    return $this;
  }
  PullRequest$Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: []
  };
  PullRequest$Links.prototype.component1 = function () {
    return this.comments;
  };
  PullRequest$Links.prototype.component2 = function () {
    return this.commits;
  };
  PullRequest$Links.prototype.component3 = function () {
    return this.html;
  };
  PullRequest$Links.prototype.component4 = function () {
    return this.issue;
  };
  PullRequest$Links.prototype.component5 = function () {
    return this.review_comment;
  };
  PullRequest$Links.prototype.component6 = function () {
    return this.review_comments;
  };
  PullRequest$Links.prototype.component7 = function () {
    return this.self;
  };
  PullRequest$Links.prototype.component8 = function () {
    return this.statuses;
  };
  PullRequest$Links.prototype.copy_yzxzxo$ = function (comments, commits, html, issue, review_comment, review_comments, self_0, statuses) {
    return new PullRequest$Links(comments === void 0 ? this.comments : comments, commits === void 0 ? this.commits : commits, html === void 0 ? this.html : html, issue === void 0 ? this.issue : issue, review_comment === void 0 ? this.review_comment : review_comment, review_comments === void 0 ? this.review_comments : review_comments, self_0 === void 0 ? this.self : self_0, statuses === void 0 ? this.statuses : statuses);
  };
  PullRequest$Links.prototype.toString = function () {
    return 'Links(comments=' + Kotlin.toString(this.comments) + (', commits=' + Kotlin.toString(this.commits)) + (', html=' + Kotlin.toString(this.html)) + (', issue=' + Kotlin.toString(this.issue)) + (', review_comment=' + Kotlin.toString(this.review_comment)) + (', review_comments=' + Kotlin.toString(this.review_comments)) + (', self=' + Kotlin.toString(this.self)) + (', statuses=' + Kotlin.toString(this.statuses)) + ')';
  };
  PullRequest$Links.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.comments) | 0;
    result = result * 31 + Kotlin.hashCode(this.commits) | 0;
    result = result * 31 + Kotlin.hashCode(this.html) | 0;
    result = result * 31 + Kotlin.hashCode(this.issue) | 0;
    result = result * 31 + Kotlin.hashCode(this.review_comment) | 0;
    result = result * 31 + Kotlin.hashCode(this.review_comments) | 0;
    result = result * 31 + Kotlin.hashCode(this.self) | 0;
    result = result * 31 + Kotlin.hashCode(this.statuses) | 0;
    return result;
  };
  PullRequest$Links.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.comments, other.comments) && Kotlin.equals(this.commits, other.commits) && Kotlin.equals(this.html, other.html) && Kotlin.equals(this.issue, other.issue) && Kotlin.equals(this.review_comment, other.review_comment) && Kotlin.equals(this.review_comments, other.review_comments) && Kotlin.equals(this.self, other.self) && Kotlin.equals(this.statuses, other.statuses)))));
  };
  function PullRequest$Branch(label, ref, repo, sha, user) {
    PullRequest$Branch$Companion_getInstance();
    this.label = label;
    this.ref = ref;
    this.repo = repo;
    this.sha = sha;
    this.user = user;
  }
  function PullRequest$Branch$Repo(allow_merge_commit, allow_rebase_merge, allow_squash_merge, archive_url, archived, assignees_url, blobs_url, branches_url, clone_url, collaborators_url, comments_url, commits_url, compare_url, contents_url, contributors_url, created_at, default_branch, delete_branch_on_merge, deployments_url, description, disabled, downloads_url, events_url, fork, forks, forks_count, forks_url, full_name, git_commits_url, git_refs_url, git_tags_url, git_url, has_downloads, has_issues, has_pages, has_projects, has_wiki, homepage, hooks_url, html_url, id, is_template, issue_comment_url, issue_events_url, issues_url, keys_url, labels_url, language, languages_url, license, merges_url, milestones_url, mirror_url, name, network_count, node_id, notifications_url, open_issues, open_issues_count, owner, permissions, private_0, pulls_url, pushed_at, releases_url, size, ssh_url, stargazers_count, stargazers_url, statuses_url, subscribers_count, subscribers_url, subscription_url, svn_url, tags_url, teams_url, temp_clone_token, template_repository, topics, trees_url, updated_at, url, visibility, watchers, watchers_count) {
    PullRequest$Branch$Repo$Companion_getInstance();
    this.allow_merge_commit = allow_merge_commit;
    this.allow_rebase_merge = allow_rebase_merge;
    this.allow_squash_merge = allow_squash_merge;
    this.archive_url = archive_url;
    this.archived = archived;
    this.assignees_url = assignees_url;
    this.blobs_url = blobs_url;
    this.branches_url = branches_url;
    this.clone_url = clone_url;
    this.collaborators_url = collaborators_url;
    this.comments_url = comments_url;
    this.commits_url = commits_url;
    this.compare_url = compare_url;
    this.contents_url = contents_url;
    this.contributors_url = contributors_url;
    this.created_at = created_at;
    this.default_branch = default_branch;
    this.delete_branch_on_merge = delete_branch_on_merge;
    this.deployments_url = deployments_url;
    this.description = description;
    this.disabled = disabled;
    this.downloads_url = downloads_url;
    this.events_url = events_url;
    this.fork = fork;
    this.forks = forks;
    this.forks_count = forks_count;
    this.forks_url = forks_url;
    this.full_name = full_name;
    this.git_commits_url = git_commits_url;
    this.git_refs_url = git_refs_url;
    this.git_tags_url = git_tags_url;
    this.git_url = git_url;
    this.has_downloads = has_downloads;
    this.has_issues = has_issues;
    this.has_pages = has_pages;
    this.has_projects = has_projects;
    this.has_wiki = has_wiki;
    this.homepage = homepage;
    this.hooks_url = hooks_url;
    this.html_url = html_url;
    this.id = id;
    this.is_template = is_template;
    this.issue_comment_url = issue_comment_url;
    this.issue_events_url = issue_events_url;
    this.issues_url = issues_url;
    this.keys_url = keys_url;
    this.labels_url = labels_url;
    this.language = language;
    this.languages_url = languages_url;
    this.license = license;
    this.merges_url = merges_url;
    this.milestones_url = milestones_url;
    this.mirror_url = mirror_url;
    this.name = name;
    this.network_count = network_count;
    this.node_id = node_id;
    this.notifications_url = notifications_url;
    this.open_issues = open_issues;
    this.open_issues_count = open_issues_count;
    this.owner = owner;
    this.permissions = permissions;
    this.private = private_0;
    this.pulls_url = pulls_url;
    this.pushed_at = pushed_at;
    this.releases_url = releases_url;
    this.size = size;
    this.ssh_url = ssh_url;
    this.stargazers_count = stargazers_count;
    this.stargazers_url = stargazers_url;
    this.statuses_url = statuses_url;
    this.subscribers_count = subscribers_count;
    this.subscribers_url = subscribers_url;
    this.subscription_url = subscription_url;
    this.svn_url = svn_url;
    this.tags_url = tags_url;
    this.teams_url = teams_url;
    this.temp_clone_token = temp_clone_token;
    this.template_repository = template_repository;
    this.topics = topics;
    this.trees_url = trees_url;
    this.updated_at = updated_at;
    this.url = url;
    this.visibility = visibility;
    this.watchers = watchers;
    this.watchers_count = watchers_count;
  }
  function PullRequest$Branch$Repo$License(html_url, key, name, node_id, spdx_id, url) {
    PullRequest$Branch$Repo$License$Companion_getInstance();
    this.html_url = html_url;
    this.key = key;
    this.name = name;
    this.node_id = node_id;
    this.spdx_id = spdx_id;
    this.url = url;
  }
  function PullRequest$Branch$Repo$License$Companion() {
    PullRequest$Branch$Repo$License$Companion_instance = this;
  }
  PullRequest$Branch$Repo$License$Companion.prototype.serializer = function () {
    return PullRequest$Branch$Repo$License$$serializer_getInstance();
  };
  PullRequest$Branch$Repo$License$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Branch$Repo$License$Companion_instance = null;
  function PullRequest$Branch$Repo$License$Companion_getInstance() {
    if (PullRequest$Branch$Repo$License$Companion_instance === null) {
      new PullRequest$Branch$Repo$License$Companion();
    }return PullRequest$Branch$Repo$License$Companion_instance;
  }
  function PullRequest$Branch$Repo$License$$serializer() {
    this.descriptor_56x0uh$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Branch.Repo.License', this, 6);
    this.descriptor.addElement_ivxn3r$('html_url', false);
    this.descriptor.addElement_ivxn3r$('key', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('spdx_id', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    PullRequest$Branch$Repo$License$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Branch$Repo$License$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_56x0uh$_0;
    }
  });
  PullRequest$Branch$Repo$License$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.html_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.key);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.name);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.node_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.spdx_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Branch$Repo$License$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$Branch$Repo$PullRequest$Branch$Repo$License_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  PullRequest$Branch$Repo$License$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  PullRequest$Branch$Repo$License$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Branch$Repo$License$$serializer_instance = null;
  function PullRequest$Branch$Repo$License$$serializer_getInstance() {
    if (PullRequest$Branch$Repo$License$$serializer_instance === null) {
      new PullRequest$Branch$Repo$License$$serializer();
    }return PullRequest$Branch$Repo$License$$serializer_instance;
  }
  function PullRequest$Branch$Repo$PullRequest$Branch$Repo$License_init(seen1, html_url, key, name, node_id, spdx_id, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Branch$Repo$License.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('html_url');
    else
      $this.html_url = html_url;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('key');
    else
      $this.key = key;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('spdx_id');
    else
      $this.spdx_id = spdx_id;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  PullRequest$Branch$Repo$License.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'License',
    interfaces: []
  };
  PullRequest$Branch$Repo$License.prototype.component1 = function () {
    return this.html_url;
  };
  PullRequest$Branch$Repo$License.prototype.component2 = function () {
    return this.key;
  };
  PullRequest$Branch$Repo$License.prototype.component3 = function () {
    return this.name;
  };
  PullRequest$Branch$Repo$License.prototype.component4 = function () {
    return this.node_id;
  };
  PullRequest$Branch$Repo$License.prototype.component5 = function () {
    return this.spdx_id;
  };
  PullRequest$Branch$Repo$License.prototype.component6 = function () {
    return this.url;
  };
  PullRequest$Branch$Repo$License.prototype.copy_r3y0ew$ = function (html_url, key, name, node_id, spdx_id, url) {
    return new PullRequest$Branch$Repo$License(html_url === void 0 ? this.html_url : html_url, key === void 0 ? this.key : key, name === void 0 ? this.name : name, node_id === void 0 ? this.node_id : node_id, spdx_id === void 0 ? this.spdx_id : spdx_id, url === void 0 ? this.url : url);
  };
  PullRequest$Branch$Repo$License.prototype.toString = function () {
    return 'License(html_url=' + Kotlin.toString(this.html_url) + (', key=' + Kotlin.toString(this.key)) + (', name=' + Kotlin.toString(this.name)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', spdx_id=' + Kotlin.toString(this.spdx_id)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  PullRequest$Branch$Repo$License.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.html_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.spdx_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  PullRequest$Branch$Repo$License.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.html_url, other.html_url) && Kotlin.equals(this.key, other.key) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.spdx_id, other.spdx_id) && Kotlin.equals(this.url, other.url)))));
  };
  function PullRequest$Branch$Repo$Permissions(admin, pull, push) {
    PullRequest$Branch$Repo$Permissions$Companion_getInstance();
    this.admin = admin;
    this.pull = pull;
    this.push = push;
  }
  function PullRequest$Branch$Repo$Permissions$Companion() {
    PullRequest$Branch$Repo$Permissions$Companion_instance = this;
  }
  PullRequest$Branch$Repo$Permissions$Companion.prototype.serializer = function () {
    return PullRequest$Branch$Repo$Permissions$$serializer_getInstance();
  };
  PullRequest$Branch$Repo$Permissions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Branch$Repo$Permissions$Companion_instance = null;
  function PullRequest$Branch$Repo$Permissions$Companion_getInstance() {
    if (PullRequest$Branch$Repo$Permissions$Companion_instance === null) {
      new PullRequest$Branch$Repo$Permissions$Companion();
    }return PullRequest$Branch$Repo$Permissions$Companion_instance;
  }
  function PullRequest$Branch$Repo$Permissions$$serializer() {
    this.descriptor_t22d9w$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Branch.Repo.Permissions', this, 3);
    this.descriptor.addElement_ivxn3r$('admin', false);
    this.descriptor.addElement_ivxn3r$('pull', false);
    this.descriptor.addElement_ivxn3r$('push', false);
    PullRequest$Branch$Repo$Permissions$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Branch$Repo$Permissions$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_t22d9w$_0;
    }
  });
  PullRequest$Branch$Repo$Permissions$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 0, value.admin);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 1, value.pull);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 2, value.push);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Branch$Repo$Permissions$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeBooleanElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeBooleanElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeBooleanElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$Branch$Repo$PullRequest$Branch$Repo$Permissions_init(bitMask0, local0, local1, local2, null);
  };
  PullRequest$Branch$Repo$Permissions$$serializer.prototype.childSerializers = function () {
    return [internal.BooleanSerializer, internal.BooleanSerializer, internal.BooleanSerializer];
  };
  PullRequest$Branch$Repo$Permissions$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Branch$Repo$Permissions$$serializer_instance = null;
  function PullRequest$Branch$Repo$Permissions$$serializer_getInstance() {
    if (PullRequest$Branch$Repo$Permissions$$serializer_instance === null) {
      new PullRequest$Branch$Repo$Permissions$$serializer();
    }return PullRequest$Branch$Repo$Permissions$$serializer_instance;
  }
  function PullRequest$Branch$Repo$PullRequest$Branch$Repo$Permissions_init(seen1, admin, pull, push, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Branch$Repo$Permissions.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('admin');
    else
      $this.admin = admin;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('pull');
    else
      $this.pull = pull;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('push');
    else
      $this.push = push;
    return $this;
  }
  PullRequest$Branch$Repo$Permissions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Permissions',
    interfaces: []
  };
  PullRequest$Branch$Repo$Permissions.prototype.component1 = function () {
    return this.admin;
  };
  PullRequest$Branch$Repo$Permissions.prototype.component2 = function () {
    return this.pull;
  };
  PullRequest$Branch$Repo$Permissions.prototype.component3 = function () {
    return this.push;
  };
  PullRequest$Branch$Repo$Permissions.prototype.copy_ws0pad$ = function (admin, pull, push) {
    return new PullRequest$Branch$Repo$Permissions(admin === void 0 ? this.admin : admin, pull === void 0 ? this.pull : pull, push === void 0 ? this.push : push);
  };
  PullRequest$Branch$Repo$Permissions.prototype.toString = function () {
    return 'Permissions(admin=' + Kotlin.toString(this.admin) + (', pull=' + Kotlin.toString(this.pull)) + (', push=' + Kotlin.toString(this.push)) + ')';
  };
  PullRequest$Branch$Repo$Permissions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.admin) | 0;
    result = result * 31 + Kotlin.hashCode(this.pull) | 0;
    result = result * 31 + Kotlin.hashCode(this.push) | 0;
    return result;
  };
  PullRequest$Branch$Repo$Permissions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.admin, other.admin) && Kotlin.equals(this.pull, other.pull) && Kotlin.equals(this.push, other.push)))));
  };
  function PullRequest$Branch$Repo$Companion() {
    PullRequest$Branch$Repo$Companion_instance = this;
  }
  PullRequest$Branch$Repo$Companion.prototype.serializer = function () {
    return PullRequest$Branch$Repo$$serializer_getInstance();
  };
  PullRequest$Branch$Repo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Branch$Repo$Companion_instance = null;
  function PullRequest$Branch$Repo$Companion_getInstance() {
    if (PullRequest$Branch$Repo$Companion_instance === null) {
      new PullRequest$Branch$Repo$Companion();
    }return PullRequest$Branch$Repo$Companion_instance;
  }
  function PullRequest$Branch$Repo$$serializer() {
    this.descriptor_gaw1na$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Branch.Repo', this, 85);
    this.descriptor.addElement_ivxn3r$('allow_merge_commit', false);
    this.descriptor.addElement_ivxn3r$('allow_rebase_merge', false);
    this.descriptor.addElement_ivxn3r$('allow_squash_merge', false);
    this.descriptor.addElement_ivxn3r$('archive_url', false);
    this.descriptor.addElement_ivxn3r$('archived', false);
    this.descriptor.addElement_ivxn3r$('assignees_url', false);
    this.descriptor.addElement_ivxn3r$('blobs_url', false);
    this.descriptor.addElement_ivxn3r$('branches_url', false);
    this.descriptor.addElement_ivxn3r$('clone_url', false);
    this.descriptor.addElement_ivxn3r$('collaborators_url', false);
    this.descriptor.addElement_ivxn3r$('comments_url', false);
    this.descriptor.addElement_ivxn3r$('commits_url', false);
    this.descriptor.addElement_ivxn3r$('compare_url', false);
    this.descriptor.addElement_ivxn3r$('contents_url', false);
    this.descriptor.addElement_ivxn3r$('contributors_url', false);
    this.descriptor.addElement_ivxn3r$('created_at', false);
    this.descriptor.addElement_ivxn3r$('default_branch', false);
    this.descriptor.addElement_ivxn3r$('delete_branch_on_merge', false);
    this.descriptor.addElement_ivxn3r$('deployments_url', false);
    this.descriptor.addElement_ivxn3r$('description', false);
    this.descriptor.addElement_ivxn3r$('disabled', false);
    this.descriptor.addElement_ivxn3r$('downloads_url', false);
    this.descriptor.addElement_ivxn3r$('events_url', false);
    this.descriptor.addElement_ivxn3r$('fork', false);
    this.descriptor.addElement_ivxn3r$('forks', false);
    this.descriptor.addElement_ivxn3r$('forks_count', false);
    this.descriptor.addElement_ivxn3r$('forks_url', false);
    this.descriptor.addElement_ivxn3r$('full_name', false);
    this.descriptor.addElement_ivxn3r$('git_commits_url', false);
    this.descriptor.addElement_ivxn3r$('git_refs_url', false);
    this.descriptor.addElement_ivxn3r$('git_tags_url', false);
    this.descriptor.addElement_ivxn3r$('git_url', false);
    this.descriptor.addElement_ivxn3r$('has_downloads', false);
    this.descriptor.addElement_ivxn3r$('has_issues', false);
    this.descriptor.addElement_ivxn3r$('has_pages', false);
    this.descriptor.addElement_ivxn3r$('has_projects', false);
    this.descriptor.addElement_ivxn3r$('has_wiki', false);
    this.descriptor.addElement_ivxn3r$('homepage', false);
    this.descriptor.addElement_ivxn3r$('hooks_url', false);
    this.descriptor.addElement_ivxn3r$('html_url', false);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('is_template', false);
    this.descriptor.addElement_ivxn3r$('issue_comment_url', false);
    this.descriptor.addElement_ivxn3r$('issue_events_url', false);
    this.descriptor.addElement_ivxn3r$('issues_url', false);
    this.descriptor.addElement_ivxn3r$('keys_url', false);
    this.descriptor.addElement_ivxn3r$('labels_url', false);
    this.descriptor.addElement_ivxn3r$('language', false);
    this.descriptor.addElement_ivxn3r$('languages_url', false);
    this.descriptor.addElement_ivxn3r$('license', false);
    this.descriptor.addElement_ivxn3r$('merges_url', false);
    this.descriptor.addElement_ivxn3r$('milestones_url', false);
    this.descriptor.addElement_ivxn3r$('mirror_url', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('network_count', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('notifications_url', false);
    this.descriptor.addElement_ivxn3r$('open_issues', false);
    this.descriptor.addElement_ivxn3r$('open_issues_count', false);
    this.descriptor.addElement_ivxn3r$('owner', false);
    this.descriptor.addElement_ivxn3r$('permissions', false);
    this.descriptor.addElement_ivxn3r$('private', false);
    this.descriptor.addElement_ivxn3r$('pulls_url', false);
    this.descriptor.addElement_ivxn3r$('pushed_at', false);
    this.descriptor.addElement_ivxn3r$('releases_url', false);
    this.descriptor.addElement_ivxn3r$('size', false);
    this.descriptor.addElement_ivxn3r$('ssh_url', false);
    this.descriptor.addElement_ivxn3r$('stargazers_count', false);
    this.descriptor.addElement_ivxn3r$('stargazers_url', false);
    this.descriptor.addElement_ivxn3r$('statuses_url', false);
    this.descriptor.addElement_ivxn3r$('subscribers_count', false);
    this.descriptor.addElement_ivxn3r$('subscribers_url', false);
    this.descriptor.addElement_ivxn3r$('subscription_url', false);
    this.descriptor.addElement_ivxn3r$('svn_url', false);
    this.descriptor.addElement_ivxn3r$('tags_url', false);
    this.descriptor.addElement_ivxn3r$('teams_url', false);
    this.descriptor.addElement_ivxn3r$('temp_clone_token', false);
    this.descriptor.addElement_ivxn3r$('template_repository', false);
    this.descriptor.addElement_ivxn3r$('topics', false);
    this.descriptor.addElement_ivxn3r$('trees_url', false);
    this.descriptor.addElement_ivxn3r$('updated_at', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('visibility', false);
    this.descriptor.addElement_ivxn3r$('watchers', false);
    this.descriptor.addElement_ivxn3r$('watchers_count', false);
    PullRequest$Branch$Repo$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Branch$Repo$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_gaw1na$_0;
    }
  });
  PullRequest$Branch$Repo$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 0, value.allow_merge_commit);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 1, value.allow_rebase_merge);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 2, value.allow_squash_merge);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.archive_url);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 4, value.archived);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.assignees_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 6, value.blobs_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 7, value.branches_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.clone_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 9, value.collaborators_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 10, value.comments_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 11, value.commits_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 12, value.compare_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 13, value.contents_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 14, value.contributors_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 15, value.created_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 16, value.default_branch);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 17, value.delete_branch_on_merge);
    output.encodeStringElement_iij8qq$(this.descriptor, 18, value.deployments_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 19, value.description);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 20, value.disabled);
    output.encodeStringElement_iij8qq$(this.descriptor, 21, value.downloads_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 22, value.events_url);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 23, value.fork);
    output.encodeIntElement_ptg7oe$(this.descriptor, 24, value.forks);
    output.encodeIntElement_ptg7oe$(this.descriptor, 25, value.forks_count);
    output.encodeStringElement_iij8qq$(this.descriptor, 26, value.forks_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 27, value.full_name);
    output.encodeStringElement_iij8qq$(this.descriptor, 28, value.git_commits_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 29, value.git_refs_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 30, value.git_tags_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 31, value.git_url);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 32, value.has_downloads);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 33, value.has_issues);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 34, value.has_pages);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 35, value.has_projects);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 36, value.has_wiki);
    output.encodeStringElement_iij8qq$(this.descriptor, 37, value.homepage);
    output.encodeStringElement_iij8qq$(this.descriptor, 38, value.hooks_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 39, value.html_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 40, value.id);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 41, value.is_template);
    output.encodeStringElement_iij8qq$(this.descriptor, 42, value.issue_comment_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 43, value.issue_events_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 44, value.issues_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 45, value.keys_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 46, value.labels_url);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 47, internal.StringSerializer, value.language);
    output.encodeStringElement_iij8qq$(this.descriptor, 48, value.languages_url);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 49, PullRequest$Branch$Repo$License$$serializer_getInstance(), value.license);
    output.encodeStringElement_iij8qq$(this.descriptor, 50, value.merges_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 51, value.milestones_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 52, value.mirror_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 53, value.name);
    output.encodeIntElement_ptg7oe$(this.descriptor, 54, value.network_count);
    output.encodeStringElement_iij8qq$(this.descriptor, 55, value.node_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 56, value.notifications_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 57, value.open_issues);
    output.encodeIntElement_ptg7oe$(this.descriptor, 58, value.open_issues_count);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 59, GithubUser$$serializer_getInstance(), value.owner);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 60, PullRequest$Branch$Repo$Permissions$$serializer_getInstance(), value.permissions);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 61, value.private);
    output.encodeStringElement_iij8qq$(this.descriptor, 62, value.pulls_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 63, value.pushed_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 64, value.releases_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 65, value.size);
    output.encodeStringElement_iij8qq$(this.descriptor, 66, value.ssh_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 67, value.stargazers_count);
    output.encodeStringElement_iij8qq$(this.descriptor, 68, value.stargazers_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 69, value.statuses_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 70, value.subscribers_count);
    output.encodeStringElement_iij8qq$(this.descriptor, 71, value.subscribers_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 72, value.subscription_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 73, value.svn_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 74, value.tags_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 75, value.teams_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 76, value.temp_clone_token);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 77, internal.StringSerializer, value.template_repository);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 78, new ArrayListSerializer(internal.StringSerializer), value.topics);
    output.encodeStringElement_iij8qq$(this.descriptor, 79, value.trees_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 80, value.updated_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 81, value.url);
    output.encodeStringElement_iij8qq$(this.descriptor, 82, value.visibility);
    output.encodeIntElement_ptg7oe$(this.descriptor, 83, value.watchers);
    output.encodeIntElement_ptg7oe$(this.descriptor, 84, value.watchers_count);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Branch$Repo$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0, bitMask1 = 0, bitMask2 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15
    , local16
    , local17
    , local18
    , local19
    , local20
    , local21
    , local22
    , local23
    , local24
    , local25
    , local26
    , local27
    , local28
    , local29
    , local30
    , local31
    , local32
    , local33
    , local34
    , local35
    , local36
    , local37
    , local38
    , local39
    , local40
    , local41
    , local42
    , local43
    , local44
    , local45
    , local46
    , local47
    , local48
    , local49
    , local50
    , local51
    , local52
    , local53
    , local54
    , local55
    , local56
    , local57
    , local58
    , local59
    , local60
    , local61
    , local62
    , local63
    , local64
    , local65
    , local66
    , local67
    , local68
    , local69
    , local70
    , local71
    , local72
    , local73
    , local74
    , local75
    , local76
    , local77
    , local78
    , local79
    , local80
    , local81
    , local82
    , local83
    , local84;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeBooleanElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeBooleanElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeBooleanElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeBooleanElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeStringElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeStringElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeStringElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case 11:
          local11 = input.decodeStringElement_szpzho$(this.descriptor, 11);
          bitMask0 |= 2048;
          break;
        case 12:
          local12 = input.decodeStringElement_szpzho$(this.descriptor, 12);
          bitMask0 |= 4096;
          break;
        case 13:
          local13 = input.decodeStringElement_szpzho$(this.descriptor, 13);
          bitMask0 |= 8192;
          break;
        case 14:
          local14 = input.decodeStringElement_szpzho$(this.descriptor, 14);
          bitMask0 |= 16384;
          break;
        case 15:
          local15 = input.decodeStringElement_szpzho$(this.descriptor, 15);
          bitMask0 |= 32768;
          break;
        case 16:
          local16 = input.decodeStringElement_szpzho$(this.descriptor, 16);
          bitMask0 |= 65536;
          break;
        case 17:
          local17 = input.decodeBooleanElement_szpzho$(this.descriptor, 17);
          bitMask0 |= 131072;
          break;
        case 18:
          local18 = input.decodeStringElement_szpzho$(this.descriptor, 18);
          bitMask0 |= 262144;
          break;
        case 19:
          local19 = input.decodeStringElement_szpzho$(this.descriptor, 19);
          bitMask0 |= 524288;
          break;
        case 20:
          local20 = input.decodeBooleanElement_szpzho$(this.descriptor, 20);
          bitMask0 |= 1048576;
          break;
        case 21:
          local21 = input.decodeStringElement_szpzho$(this.descriptor, 21);
          bitMask0 |= 2097152;
          break;
        case 22:
          local22 = input.decodeStringElement_szpzho$(this.descriptor, 22);
          bitMask0 |= 4194304;
          break;
        case 23:
          local23 = input.decodeBooleanElement_szpzho$(this.descriptor, 23);
          bitMask0 |= 8388608;
          break;
        case 24:
          local24 = input.decodeIntElement_szpzho$(this.descriptor, 24);
          bitMask0 |= 16777216;
          break;
        case 25:
          local25 = input.decodeIntElement_szpzho$(this.descriptor, 25);
          bitMask0 |= 33554432;
          break;
        case 26:
          local26 = input.decodeStringElement_szpzho$(this.descriptor, 26);
          bitMask0 |= 67108864;
          break;
        case 27:
          local27 = input.decodeStringElement_szpzho$(this.descriptor, 27);
          bitMask0 |= 134217728;
          break;
        case 28:
          local28 = input.decodeStringElement_szpzho$(this.descriptor, 28);
          bitMask0 |= 268435456;
          break;
        case 29:
          local29 = input.decodeStringElement_szpzho$(this.descriptor, 29);
          bitMask0 |= 536870912;
          break;
        case 30:
          local30 = input.decodeStringElement_szpzho$(this.descriptor, 30);
          bitMask0 |= 1073741824;
          break;
        case 31:
          local31 = input.decodeStringElement_szpzho$(this.descriptor, 31);
          bitMask0 |= -2147483648;
          break;
        case 32:
          local32 = input.decodeBooleanElement_szpzho$(this.descriptor, 32);
          bitMask1 |= 1;
          break;
        case 33:
          local33 = input.decodeBooleanElement_szpzho$(this.descriptor, 33);
          bitMask1 |= 2;
          break;
        case 34:
          local34 = input.decodeBooleanElement_szpzho$(this.descriptor, 34);
          bitMask1 |= 4;
          break;
        case 35:
          local35 = input.decodeBooleanElement_szpzho$(this.descriptor, 35);
          bitMask1 |= 8;
          break;
        case 36:
          local36 = input.decodeBooleanElement_szpzho$(this.descriptor, 36);
          bitMask1 |= 16;
          break;
        case 37:
          local37 = input.decodeStringElement_szpzho$(this.descriptor, 37);
          bitMask1 |= 32;
          break;
        case 38:
          local38 = input.decodeStringElement_szpzho$(this.descriptor, 38);
          bitMask1 |= 64;
          break;
        case 39:
          local39 = input.decodeStringElement_szpzho$(this.descriptor, 39);
          bitMask1 |= 128;
          break;
        case 40:
          local40 = input.decodeIntElement_szpzho$(this.descriptor, 40);
          bitMask1 |= 256;
          break;
        case 41:
          local41 = input.decodeBooleanElement_szpzho$(this.descriptor, 41);
          bitMask1 |= 512;
          break;
        case 42:
          local42 = input.decodeStringElement_szpzho$(this.descriptor, 42);
          bitMask1 |= 1024;
          break;
        case 43:
          local43 = input.decodeStringElement_szpzho$(this.descriptor, 43);
          bitMask1 |= 2048;
          break;
        case 44:
          local44 = input.decodeStringElement_szpzho$(this.descriptor, 44);
          bitMask1 |= 4096;
          break;
        case 45:
          local45 = input.decodeStringElement_szpzho$(this.descriptor, 45);
          bitMask1 |= 8192;
          break;
        case 46:
          local46 = input.decodeStringElement_szpzho$(this.descriptor, 46);
          bitMask1 |= 16384;
          break;
        case 47:
          local47 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 47, internal.StringSerializer, local47);
          bitMask1 |= 32768;
          break;
        case 48:
          local48 = input.decodeStringElement_szpzho$(this.descriptor, 48);
          bitMask1 |= 65536;
          break;
        case 49:
          local49 = input.decodeSerializableElement_12e8id$(this.descriptor, 49, PullRequest$Branch$Repo$License$$serializer_getInstance(), local49);
          bitMask1 |= 131072;
          break;
        case 50:
          local50 = input.decodeStringElement_szpzho$(this.descriptor, 50);
          bitMask1 |= 262144;
          break;
        case 51:
          local51 = input.decodeStringElement_szpzho$(this.descriptor, 51);
          bitMask1 |= 524288;
          break;
        case 52:
          local52 = input.decodeStringElement_szpzho$(this.descriptor, 52);
          bitMask1 |= 1048576;
          break;
        case 53:
          local53 = input.decodeStringElement_szpzho$(this.descriptor, 53);
          bitMask1 |= 2097152;
          break;
        case 54:
          local54 = input.decodeIntElement_szpzho$(this.descriptor, 54);
          bitMask1 |= 4194304;
          break;
        case 55:
          local55 = input.decodeStringElement_szpzho$(this.descriptor, 55);
          bitMask1 |= 8388608;
          break;
        case 56:
          local56 = input.decodeStringElement_szpzho$(this.descriptor, 56);
          bitMask1 |= 16777216;
          break;
        case 57:
          local57 = input.decodeIntElement_szpzho$(this.descriptor, 57);
          bitMask1 |= 33554432;
          break;
        case 58:
          local58 = input.decodeIntElement_szpzho$(this.descriptor, 58);
          bitMask1 |= 67108864;
          break;
        case 59:
          local59 = input.decodeSerializableElement_12e8id$(this.descriptor, 59, GithubUser$$serializer_getInstance(), local59);
          bitMask1 |= 134217728;
          break;
        case 60:
          local60 = input.decodeSerializableElement_12e8id$(this.descriptor, 60, PullRequest$Branch$Repo$Permissions$$serializer_getInstance(), local60);
          bitMask1 |= 268435456;
          break;
        case 61:
          local61 = input.decodeBooleanElement_szpzho$(this.descriptor, 61);
          bitMask1 |= 536870912;
          break;
        case 62:
          local62 = input.decodeStringElement_szpzho$(this.descriptor, 62);
          bitMask1 |= 1073741824;
          break;
        case 63:
          local63 = input.decodeStringElement_szpzho$(this.descriptor, 63);
          bitMask1 |= -2147483648;
          break;
        case 64:
          local64 = input.decodeStringElement_szpzho$(this.descriptor, 64);
          bitMask2 |= 1;
          break;
        case 65:
          local65 = input.decodeIntElement_szpzho$(this.descriptor, 65);
          bitMask2 |= 2;
          break;
        case 66:
          local66 = input.decodeStringElement_szpzho$(this.descriptor, 66);
          bitMask2 |= 4;
          break;
        case 67:
          local67 = input.decodeIntElement_szpzho$(this.descriptor, 67);
          bitMask2 |= 8;
          break;
        case 68:
          local68 = input.decodeStringElement_szpzho$(this.descriptor, 68);
          bitMask2 |= 16;
          break;
        case 69:
          local69 = input.decodeStringElement_szpzho$(this.descriptor, 69);
          bitMask2 |= 32;
          break;
        case 70:
          local70 = input.decodeIntElement_szpzho$(this.descriptor, 70);
          bitMask2 |= 64;
          break;
        case 71:
          local71 = input.decodeStringElement_szpzho$(this.descriptor, 71);
          bitMask2 |= 128;
          break;
        case 72:
          local72 = input.decodeStringElement_szpzho$(this.descriptor, 72);
          bitMask2 |= 256;
          break;
        case 73:
          local73 = input.decodeStringElement_szpzho$(this.descriptor, 73);
          bitMask2 |= 512;
          break;
        case 74:
          local74 = input.decodeStringElement_szpzho$(this.descriptor, 74);
          bitMask2 |= 1024;
          break;
        case 75:
          local75 = input.decodeStringElement_szpzho$(this.descriptor, 75);
          bitMask2 |= 2048;
          break;
        case 76:
          local76 = input.decodeStringElement_szpzho$(this.descriptor, 76);
          bitMask2 |= 4096;
          break;
        case 77:
          local77 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 77, internal.StringSerializer, local77);
          bitMask2 |= 8192;
          break;
        case 78:
          local78 = input.decodeSerializableElement_12e8id$(this.descriptor, 78, new ArrayListSerializer(internal.StringSerializer), local78);
          bitMask2 |= 16384;
          break;
        case 79:
          local79 = input.decodeStringElement_szpzho$(this.descriptor, 79);
          bitMask2 |= 32768;
          break;
        case 80:
          local80 = input.decodeStringElement_szpzho$(this.descriptor, 80);
          bitMask2 |= 65536;
          break;
        case 81:
          local81 = input.decodeStringElement_szpzho$(this.descriptor, 81);
          bitMask2 |= 131072;
          break;
        case 82:
          local82 = input.decodeStringElement_szpzho$(this.descriptor, 82);
          bitMask2 |= 262144;
          break;
        case 83:
          local83 = input.decodeIntElement_szpzho$(this.descriptor, 83);
          bitMask2 |= 524288;
          break;
        case 84:
          local84 = input.decodeIntElement_szpzho$(this.descriptor, 84);
          bitMask2 |= 1048576;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$Branch$PullRequest$Branch$Repo_init(bitMask0, bitMask1, bitMask2, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, local16, local17, local18, local19, local20, local21, local22, local23, local24, local25, local26, local27, local28, local29, local30, local31, local32, local33, local34, local35, local36, local37, local38, local39, local40, local41, local42, local43, local44, local45, local46, local47, local48, local49, local50, local51, local52, local53, local54, local55, local56, local57, local58, local59, local60, local61, local62, local63, local64, local65, local66, local67, local68, local69, local70, local71, local72, local73, local74, local75, local76, local77, local78, local79, local80, local81, local82, local83, local84, null);
  };
  PullRequest$Branch$Repo$$serializer.prototype.childSerializers = function () {
    return [internal.BooleanSerializer, internal.BooleanSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.IntSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, internal.BooleanSerializer, internal.BooleanSerializer, internal.BooleanSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new NullableSerializer(internal.StringSerializer), internal.StringSerializer, PullRequest$Branch$Repo$License$$serializer_getInstance(), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.IntSerializer, GithubUser$$serializer_getInstance(), PullRequest$Branch$Repo$Permissions$$serializer_getInstance(), internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new NullableSerializer(internal.StringSerializer), new ArrayListSerializer(internal.StringSerializer), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.IntSerializer];
  };
  PullRequest$Branch$Repo$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Branch$Repo$$serializer_instance = null;
  function PullRequest$Branch$Repo$$serializer_getInstance() {
    if (PullRequest$Branch$Repo$$serializer_instance === null) {
      new PullRequest$Branch$Repo$$serializer();
    }return PullRequest$Branch$Repo$$serializer_instance;
  }
  function PullRequest$Branch$PullRequest$Branch$Repo_init(seen1, seen2, seen3, allow_merge_commit, allow_rebase_merge, allow_squash_merge, archive_url, archived, assignees_url, blobs_url, branches_url, clone_url, collaborators_url, comments_url, commits_url, compare_url, contents_url, contributors_url, created_at, default_branch, delete_branch_on_merge, deployments_url, description, disabled, downloads_url, events_url, fork, forks, forks_count, forks_url, full_name, git_commits_url, git_refs_url, git_tags_url, git_url, has_downloads, has_issues, has_pages, has_projects, has_wiki, homepage, hooks_url, html_url, id, is_template, issue_comment_url, issue_events_url, issues_url, keys_url, labels_url, language, languages_url, license, merges_url, milestones_url, mirror_url, name, network_count, node_id, notifications_url, open_issues, open_issues_count, owner, permissions, private_0, pulls_url, pushed_at, releases_url, size, ssh_url, stargazers_count, stargazers_url, statuses_url, subscribers_count, subscribers_url, subscription_url, svn_url, tags_url, teams_url, temp_clone_token, template_repository, topics, trees_url, updated_at, url, visibility, watchers, watchers_count, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Branch$Repo.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('allow_merge_commit');
    else
      $this.allow_merge_commit = allow_merge_commit;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('allow_rebase_merge');
    else
      $this.allow_rebase_merge = allow_rebase_merge;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('allow_squash_merge');
    else
      $this.allow_squash_merge = allow_squash_merge;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('archive_url');
    else
      $this.archive_url = archive_url;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('archived');
    else
      $this.archived = archived;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('assignees_url');
    else
      $this.assignees_url = assignees_url;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('blobs_url');
    else
      $this.blobs_url = blobs_url;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('branches_url');
    else
      $this.branches_url = branches_url;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('clone_url');
    else
      $this.clone_url = clone_url;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('collaborators_url');
    else
      $this.collaborators_url = collaborators_url;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('comments_url');
    else
      $this.comments_url = comments_url;
    if ((seen1 & 2048) === 0)
      throw MissingFieldException_init('commits_url');
    else
      $this.commits_url = commits_url;
    if ((seen1 & 4096) === 0)
      throw MissingFieldException_init('compare_url');
    else
      $this.compare_url = compare_url;
    if ((seen1 & 8192) === 0)
      throw MissingFieldException_init('contents_url');
    else
      $this.contents_url = contents_url;
    if ((seen1 & 16384) === 0)
      throw MissingFieldException_init('contributors_url');
    else
      $this.contributors_url = contributors_url;
    if ((seen1 & 32768) === 0)
      throw MissingFieldException_init('created_at');
    else
      $this.created_at = created_at;
    if ((seen1 & 65536) === 0)
      throw MissingFieldException_init('default_branch');
    else
      $this.default_branch = default_branch;
    if ((seen1 & 131072) === 0)
      throw MissingFieldException_init('delete_branch_on_merge');
    else
      $this.delete_branch_on_merge = delete_branch_on_merge;
    if ((seen1 & 262144) === 0)
      throw MissingFieldException_init('deployments_url');
    else
      $this.deployments_url = deployments_url;
    if ((seen1 & 524288) === 0)
      throw MissingFieldException_init('description');
    else
      $this.description = description;
    if ((seen1 & 1048576) === 0)
      throw MissingFieldException_init('disabled');
    else
      $this.disabled = disabled;
    if ((seen1 & 2097152) === 0)
      throw MissingFieldException_init('downloads_url');
    else
      $this.downloads_url = downloads_url;
    if ((seen1 & 4194304) === 0)
      throw MissingFieldException_init('events_url');
    else
      $this.events_url = events_url;
    if ((seen1 & 8388608) === 0)
      throw MissingFieldException_init('fork');
    else
      $this.fork = fork;
    if ((seen1 & 16777216) === 0)
      throw MissingFieldException_init('forks');
    else
      $this.forks = forks;
    if ((seen1 & 33554432) === 0)
      throw MissingFieldException_init('forks_count');
    else
      $this.forks_count = forks_count;
    if ((seen1 & 67108864) === 0)
      throw MissingFieldException_init('forks_url');
    else
      $this.forks_url = forks_url;
    if ((seen1 & 134217728) === 0)
      throw MissingFieldException_init('full_name');
    else
      $this.full_name = full_name;
    if ((seen1 & 268435456) === 0)
      throw MissingFieldException_init('git_commits_url');
    else
      $this.git_commits_url = git_commits_url;
    if ((seen1 & 536870912) === 0)
      throw MissingFieldException_init('git_refs_url');
    else
      $this.git_refs_url = git_refs_url;
    if ((seen1 & 1073741824) === 0)
      throw MissingFieldException_init('git_tags_url');
    else
      $this.git_tags_url = git_tags_url;
    if ((seen1 & -2147483648) === 0)
      throw MissingFieldException_init('git_url');
    else
      $this.git_url = git_url;
    if ((seen2 & 1) === 0)
      throw MissingFieldException_init('has_downloads');
    else
      $this.has_downloads = has_downloads;
    if ((seen2 & 2) === 0)
      throw MissingFieldException_init('has_issues');
    else
      $this.has_issues = has_issues;
    if ((seen2 & 4) === 0)
      throw MissingFieldException_init('has_pages');
    else
      $this.has_pages = has_pages;
    if ((seen2 & 8) === 0)
      throw MissingFieldException_init('has_projects');
    else
      $this.has_projects = has_projects;
    if ((seen2 & 16) === 0)
      throw MissingFieldException_init('has_wiki');
    else
      $this.has_wiki = has_wiki;
    if ((seen2 & 32) === 0)
      throw MissingFieldException_init('homepage');
    else
      $this.homepage = homepage;
    if ((seen2 & 64) === 0)
      throw MissingFieldException_init('hooks_url');
    else
      $this.hooks_url = hooks_url;
    if ((seen2 & 128) === 0)
      throw MissingFieldException_init('html_url');
    else
      $this.html_url = html_url;
    if ((seen2 & 256) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen2 & 512) === 0)
      throw MissingFieldException_init('is_template');
    else
      $this.is_template = is_template;
    if ((seen2 & 1024) === 0)
      throw MissingFieldException_init('issue_comment_url');
    else
      $this.issue_comment_url = issue_comment_url;
    if ((seen2 & 2048) === 0)
      throw MissingFieldException_init('issue_events_url');
    else
      $this.issue_events_url = issue_events_url;
    if ((seen2 & 4096) === 0)
      throw MissingFieldException_init('issues_url');
    else
      $this.issues_url = issues_url;
    if ((seen2 & 8192) === 0)
      throw MissingFieldException_init('keys_url');
    else
      $this.keys_url = keys_url;
    if ((seen2 & 16384) === 0)
      throw MissingFieldException_init('labels_url');
    else
      $this.labels_url = labels_url;
    if ((seen2 & 32768) === 0)
      throw MissingFieldException_init('language');
    else
      $this.language = language;
    if ((seen2 & 65536) === 0)
      throw MissingFieldException_init('languages_url');
    else
      $this.languages_url = languages_url;
    if ((seen2 & 131072) === 0)
      throw MissingFieldException_init('license');
    else
      $this.license = license;
    if ((seen2 & 262144) === 0)
      throw MissingFieldException_init('merges_url');
    else
      $this.merges_url = merges_url;
    if ((seen2 & 524288) === 0)
      throw MissingFieldException_init('milestones_url');
    else
      $this.milestones_url = milestones_url;
    if ((seen2 & 1048576) === 0)
      throw MissingFieldException_init('mirror_url');
    else
      $this.mirror_url = mirror_url;
    if ((seen2 & 2097152) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen2 & 4194304) === 0)
      throw MissingFieldException_init('network_count');
    else
      $this.network_count = network_count;
    if ((seen2 & 8388608) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen2 & 16777216) === 0)
      throw MissingFieldException_init('notifications_url');
    else
      $this.notifications_url = notifications_url;
    if ((seen2 & 33554432) === 0)
      throw MissingFieldException_init('open_issues');
    else
      $this.open_issues = open_issues;
    if ((seen2 & 67108864) === 0)
      throw MissingFieldException_init('open_issues_count');
    else
      $this.open_issues_count = open_issues_count;
    if ((seen2 & 134217728) === 0)
      throw MissingFieldException_init('owner');
    else
      $this.owner = owner;
    if ((seen2 & 268435456) === 0)
      throw MissingFieldException_init('permissions');
    else
      $this.permissions = permissions;
    if ((seen2 & 536870912) === 0)
      throw MissingFieldException_init('private');
    else
      $this.private = private_0;
    if ((seen2 & 1073741824) === 0)
      throw MissingFieldException_init('pulls_url');
    else
      $this.pulls_url = pulls_url;
    if ((seen2 & -2147483648) === 0)
      throw MissingFieldException_init('pushed_at');
    else
      $this.pushed_at = pushed_at;
    if ((seen3 & 1) === 0)
      throw MissingFieldException_init('releases_url');
    else
      $this.releases_url = releases_url;
    if ((seen3 & 2) === 0)
      throw MissingFieldException_init('size');
    else
      $this.size = size;
    if ((seen3 & 4) === 0)
      throw MissingFieldException_init('ssh_url');
    else
      $this.ssh_url = ssh_url;
    if ((seen3 & 8) === 0)
      throw MissingFieldException_init('stargazers_count');
    else
      $this.stargazers_count = stargazers_count;
    if ((seen3 & 16) === 0)
      throw MissingFieldException_init('stargazers_url');
    else
      $this.stargazers_url = stargazers_url;
    if ((seen3 & 32) === 0)
      throw MissingFieldException_init('statuses_url');
    else
      $this.statuses_url = statuses_url;
    if ((seen3 & 64) === 0)
      throw MissingFieldException_init('subscribers_count');
    else
      $this.subscribers_count = subscribers_count;
    if ((seen3 & 128) === 0)
      throw MissingFieldException_init('subscribers_url');
    else
      $this.subscribers_url = subscribers_url;
    if ((seen3 & 256) === 0)
      throw MissingFieldException_init('subscription_url');
    else
      $this.subscription_url = subscription_url;
    if ((seen3 & 512) === 0)
      throw MissingFieldException_init('svn_url');
    else
      $this.svn_url = svn_url;
    if ((seen3 & 1024) === 0)
      throw MissingFieldException_init('tags_url');
    else
      $this.tags_url = tags_url;
    if ((seen3 & 2048) === 0)
      throw MissingFieldException_init('teams_url');
    else
      $this.teams_url = teams_url;
    if ((seen3 & 4096) === 0)
      throw MissingFieldException_init('temp_clone_token');
    else
      $this.temp_clone_token = temp_clone_token;
    if ((seen3 & 8192) === 0)
      throw MissingFieldException_init('template_repository');
    else
      $this.template_repository = template_repository;
    if ((seen3 & 16384) === 0)
      throw MissingFieldException_init('topics');
    else
      $this.topics = topics;
    if ((seen3 & 32768) === 0)
      throw MissingFieldException_init('trees_url');
    else
      $this.trees_url = trees_url;
    if ((seen3 & 65536) === 0)
      throw MissingFieldException_init('updated_at');
    else
      $this.updated_at = updated_at;
    if ((seen3 & 131072) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    if ((seen3 & 262144) === 0)
      throw MissingFieldException_init('visibility');
    else
      $this.visibility = visibility;
    if ((seen3 & 524288) === 0)
      throw MissingFieldException_init('watchers');
    else
      $this.watchers = watchers;
    if ((seen3 & 1048576) === 0)
      throw MissingFieldException_init('watchers_count');
    else
      $this.watchers_count = watchers_count;
    return $this;
  }
  PullRequest$Branch$Repo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Repo',
    interfaces: []
  };
  PullRequest$Branch$Repo.prototype.component1 = function () {
    return this.allow_merge_commit;
  };
  PullRequest$Branch$Repo.prototype.component2 = function () {
    return this.allow_rebase_merge;
  };
  PullRequest$Branch$Repo.prototype.component3 = function () {
    return this.allow_squash_merge;
  };
  PullRequest$Branch$Repo.prototype.component4 = function () {
    return this.archive_url;
  };
  PullRequest$Branch$Repo.prototype.component5 = function () {
    return this.archived;
  };
  PullRequest$Branch$Repo.prototype.component6 = function () {
    return this.assignees_url;
  };
  PullRequest$Branch$Repo.prototype.component7 = function () {
    return this.blobs_url;
  };
  PullRequest$Branch$Repo.prototype.component8 = function () {
    return this.branches_url;
  };
  PullRequest$Branch$Repo.prototype.component9 = function () {
    return this.clone_url;
  };
  PullRequest$Branch$Repo.prototype.component10 = function () {
    return this.collaborators_url;
  };
  PullRequest$Branch$Repo.prototype.component11 = function () {
    return this.comments_url;
  };
  PullRequest$Branch$Repo.prototype.component12 = function () {
    return this.commits_url;
  };
  PullRequest$Branch$Repo.prototype.component13 = function () {
    return this.compare_url;
  };
  PullRequest$Branch$Repo.prototype.component14 = function () {
    return this.contents_url;
  };
  PullRequest$Branch$Repo.prototype.component15 = function () {
    return this.contributors_url;
  };
  PullRequest$Branch$Repo.prototype.component16 = function () {
    return this.created_at;
  };
  PullRequest$Branch$Repo.prototype.component17 = function () {
    return this.default_branch;
  };
  PullRequest$Branch$Repo.prototype.component18 = function () {
    return this.delete_branch_on_merge;
  };
  PullRequest$Branch$Repo.prototype.component19 = function () {
    return this.deployments_url;
  };
  PullRequest$Branch$Repo.prototype.component20 = function () {
    return this.description;
  };
  PullRequest$Branch$Repo.prototype.component21 = function () {
    return this.disabled;
  };
  PullRequest$Branch$Repo.prototype.component22 = function () {
    return this.downloads_url;
  };
  PullRequest$Branch$Repo.prototype.component23 = function () {
    return this.events_url;
  };
  PullRequest$Branch$Repo.prototype.component24 = function () {
    return this.fork;
  };
  PullRequest$Branch$Repo.prototype.component25 = function () {
    return this.forks;
  };
  PullRequest$Branch$Repo.prototype.component26 = function () {
    return this.forks_count;
  };
  PullRequest$Branch$Repo.prototype.component27 = function () {
    return this.forks_url;
  };
  PullRequest$Branch$Repo.prototype.component28 = function () {
    return this.full_name;
  };
  PullRequest$Branch$Repo.prototype.component29 = function () {
    return this.git_commits_url;
  };
  PullRequest$Branch$Repo.prototype.component30 = function () {
    return this.git_refs_url;
  };
  PullRequest$Branch$Repo.prototype.component31 = function () {
    return this.git_tags_url;
  };
  PullRequest$Branch$Repo.prototype.component32 = function () {
    return this.git_url;
  };
  PullRequest$Branch$Repo.prototype.component33 = function () {
    return this.has_downloads;
  };
  PullRequest$Branch$Repo.prototype.component34 = function () {
    return this.has_issues;
  };
  PullRequest$Branch$Repo.prototype.component35 = function () {
    return this.has_pages;
  };
  PullRequest$Branch$Repo.prototype.component36 = function () {
    return this.has_projects;
  };
  PullRequest$Branch$Repo.prototype.component37 = function () {
    return this.has_wiki;
  };
  PullRequest$Branch$Repo.prototype.component38 = function () {
    return this.homepage;
  };
  PullRequest$Branch$Repo.prototype.component39 = function () {
    return this.hooks_url;
  };
  PullRequest$Branch$Repo.prototype.component40 = function () {
    return this.html_url;
  };
  PullRequest$Branch$Repo.prototype.component41 = function () {
    return this.id;
  };
  PullRequest$Branch$Repo.prototype.component42 = function () {
    return this.is_template;
  };
  PullRequest$Branch$Repo.prototype.component43 = function () {
    return this.issue_comment_url;
  };
  PullRequest$Branch$Repo.prototype.component44 = function () {
    return this.issue_events_url;
  };
  PullRequest$Branch$Repo.prototype.component45 = function () {
    return this.issues_url;
  };
  PullRequest$Branch$Repo.prototype.component46 = function () {
    return this.keys_url;
  };
  PullRequest$Branch$Repo.prototype.component47 = function () {
    return this.labels_url;
  };
  PullRequest$Branch$Repo.prototype.component48 = function () {
    return this.language;
  };
  PullRequest$Branch$Repo.prototype.component49 = function () {
    return this.languages_url;
  };
  PullRequest$Branch$Repo.prototype.component50 = function () {
    return this.license;
  };
  PullRequest$Branch$Repo.prototype.component51 = function () {
    return this.merges_url;
  };
  PullRequest$Branch$Repo.prototype.component52 = function () {
    return this.milestones_url;
  };
  PullRequest$Branch$Repo.prototype.component53 = function () {
    return this.mirror_url;
  };
  PullRequest$Branch$Repo.prototype.component54 = function () {
    return this.name;
  };
  PullRequest$Branch$Repo.prototype.component55 = function () {
    return this.network_count;
  };
  PullRequest$Branch$Repo.prototype.component56 = function () {
    return this.node_id;
  };
  PullRequest$Branch$Repo.prototype.component57 = function () {
    return this.notifications_url;
  };
  PullRequest$Branch$Repo.prototype.component58 = function () {
    return this.open_issues;
  };
  PullRequest$Branch$Repo.prototype.component59 = function () {
    return this.open_issues_count;
  };
  PullRequest$Branch$Repo.prototype.component60 = function () {
    return this.owner;
  };
  PullRequest$Branch$Repo.prototype.component61 = function () {
    return this.permissions;
  };
  PullRequest$Branch$Repo.prototype.component62 = function () {
    return this.private;
  };
  PullRequest$Branch$Repo.prototype.component63 = function () {
    return this.pulls_url;
  };
  PullRequest$Branch$Repo.prototype.component64 = function () {
    return this.pushed_at;
  };
  PullRequest$Branch$Repo.prototype.component65 = function () {
    return this.releases_url;
  };
  PullRequest$Branch$Repo.prototype.component66 = function () {
    return this.size;
  };
  PullRequest$Branch$Repo.prototype.component67 = function () {
    return this.ssh_url;
  };
  PullRequest$Branch$Repo.prototype.component68 = function () {
    return this.stargazers_count;
  };
  PullRequest$Branch$Repo.prototype.component69 = function () {
    return this.stargazers_url;
  };
  PullRequest$Branch$Repo.prototype.component70 = function () {
    return this.statuses_url;
  };
  PullRequest$Branch$Repo.prototype.component71 = function () {
    return this.subscribers_count;
  };
  PullRequest$Branch$Repo.prototype.component72 = function () {
    return this.subscribers_url;
  };
  PullRequest$Branch$Repo.prototype.component73 = function () {
    return this.subscription_url;
  };
  PullRequest$Branch$Repo.prototype.component74 = function () {
    return this.svn_url;
  };
  PullRequest$Branch$Repo.prototype.component75 = function () {
    return this.tags_url;
  };
  PullRequest$Branch$Repo.prototype.component76 = function () {
    return this.teams_url;
  };
  PullRequest$Branch$Repo.prototype.component77 = function () {
    return this.temp_clone_token;
  };
  PullRequest$Branch$Repo.prototype.component78 = function () {
    return this.template_repository;
  };
  PullRequest$Branch$Repo.prototype.component79 = function () {
    return this.topics;
  };
  PullRequest$Branch$Repo.prototype.component80 = function () {
    return this.trees_url;
  };
  PullRequest$Branch$Repo.prototype.component81 = function () {
    return this.updated_at;
  };
  PullRequest$Branch$Repo.prototype.component82 = function () {
    return this.url;
  };
  PullRequest$Branch$Repo.prototype.component83 = function () {
    return this.visibility;
  };
  PullRequest$Branch$Repo.prototype.component84 = function () {
    return this.watchers;
  };
  PullRequest$Branch$Repo.prototype.component85 = function () {
    return this.watchers_count;
  };
  PullRequest$Branch$Repo.prototype.copy_n81dsl$ = function (allow_merge_commit, allow_rebase_merge, allow_squash_merge, archive_url, archived, assignees_url, blobs_url, branches_url, clone_url, collaborators_url, comments_url, commits_url, compare_url, contents_url, contributors_url, created_at, default_branch, delete_branch_on_merge, deployments_url, description, disabled, downloads_url, events_url, fork, forks, forks_count, forks_url, full_name, git_commits_url, git_refs_url, git_tags_url, git_url, has_downloads, has_issues, has_pages, has_projects, has_wiki, homepage, hooks_url, html_url, id, is_template, issue_comment_url, issue_events_url, issues_url, keys_url, labels_url, language, languages_url, license, merges_url, milestones_url, mirror_url, name, network_count, node_id, notifications_url, open_issues, open_issues_count, owner, permissions, private_0, pulls_url, pushed_at, releases_url, size, ssh_url, stargazers_count, stargazers_url, statuses_url, subscribers_count, subscribers_url, subscription_url, svn_url, tags_url, teams_url, temp_clone_token, template_repository, topics, trees_url, updated_at, url, visibility, watchers, watchers_count) {
    return new PullRequest$Branch$Repo(allow_merge_commit === void 0 ? this.allow_merge_commit : allow_merge_commit, allow_rebase_merge === void 0 ? this.allow_rebase_merge : allow_rebase_merge, allow_squash_merge === void 0 ? this.allow_squash_merge : allow_squash_merge, archive_url === void 0 ? this.archive_url : archive_url, archived === void 0 ? this.archived : archived, assignees_url === void 0 ? this.assignees_url : assignees_url, blobs_url === void 0 ? this.blobs_url : blobs_url, branches_url === void 0 ? this.branches_url : branches_url, clone_url === void 0 ? this.clone_url : clone_url, collaborators_url === void 0 ? this.collaborators_url : collaborators_url, comments_url === void 0 ? this.comments_url : comments_url, commits_url === void 0 ? this.commits_url : commits_url, compare_url === void 0 ? this.compare_url : compare_url, contents_url === void 0 ? this.contents_url : contents_url, contributors_url === void 0 ? this.contributors_url : contributors_url, created_at === void 0 ? this.created_at : created_at, default_branch === void 0 ? this.default_branch : default_branch, delete_branch_on_merge === void 0 ? this.delete_branch_on_merge : delete_branch_on_merge, deployments_url === void 0 ? this.deployments_url : deployments_url, description === void 0 ? this.description : description, disabled === void 0 ? this.disabled : disabled, downloads_url === void 0 ? this.downloads_url : downloads_url, events_url === void 0 ? this.events_url : events_url, fork === void 0 ? this.fork : fork, forks === void 0 ? this.forks : forks, forks_count === void 0 ? this.forks_count : forks_count, forks_url === void 0 ? this.forks_url : forks_url, full_name === void 0 ? this.full_name : full_name, git_commits_url === void 0 ? this.git_commits_url : git_commits_url, git_refs_url === void 0 ? this.git_refs_url : git_refs_url, git_tags_url === void 0 ? this.git_tags_url : git_tags_url, git_url === void 0 ? this.git_url : git_url, has_downloads === void 0 ? this.has_downloads : has_downloads, has_issues === void 0 ? this.has_issues : has_issues, has_pages === void 0 ? this.has_pages : has_pages, has_projects === void 0 ? this.has_projects : has_projects, has_wiki === void 0 ? this.has_wiki : has_wiki, homepage === void 0 ? this.homepage : homepage, hooks_url === void 0 ? this.hooks_url : hooks_url, html_url === void 0 ? this.html_url : html_url, id === void 0 ? this.id : id, is_template === void 0 ? this.is_template : is_template, issue_comment_url === void 0 ? this.issue_comment_url : issue_comment_url, issue_events_url === void 0 ? this.issue_events_url : issue_events_url, issues_url === void 0 ? this.issues_url : issues_url, keys_url === void 0 ? this.keys_url : keys_url, labels_url === void 0 ? this.labels_url : labels_url, language === void 0 ? this.language : language, languages_url === void 0 ? this.languages_url : languages_url, license === void 0 ? this.license : license, merges_url === void 0 ? this.merges_url : merges_url, milestones_url === void 0 ? this.milestones_url : milestones_url, mirror_url === void 0 ? this.mirror_url : mirror_url, name === void 0 ? this.name : name, network_count === void 0 ? this.network_count : network_count, node_id === void 0 ? this.node_id : node_id, notifications_url === void 0 ? this.notifications_url : notifications_url, open_issues === void 0 ? this.open_issues : open_issues, open_issues_count === void 0 ? this.open_issues_count : open_issues_count, owner === void 0 ? this.owner : owner, permissions === void 0 ? this.permissions : permissions, private_0 === void 0 ? this.private : private_0, pulls_url === void 0 ? this.pulls_url : pulls_url, pushed_at === void 0 ? this.pushed_at : pushed_at, releases_url === void 0 ? this.releases_url : releases_url, size === void 0 ? this.size : size, ssh_url === void 0 ? this.ssh_url : ssh_url, stargazers_count === void 0 ? this.stargazers_count : stargazers_count, stargazers_url === void 0 ? this.stargazers_url : stargazers_url, statuses_url === void 0 ? this.statuses_url : statuses_url, subscribers_count === void 0 ? this.subscribers_count : subscribers_count, subscribers_url === void 0 ? this.subscribers_url : subscribers_url, subscription_url === void 0 ? this.subscription_url : subscription_url, svn_url === void 0 ? this.svn_url : svn_url, tags_url === void 0 ? this.tags_url : tags_url, teams_url === void 0 ? this.teams_url : teams_url, temp_clone_token === void 0 ? this.temp_clone_token : temp_clone_token, template_repository === void 0 ? this.template_repository : template_repository, topics === void 0 ? this.topics : topics, trees_url === void 0 ? this.trees_url : trees_url, updated_at === void 0 ? this.updated_at : updated_at, url === void 0 ? this.url : url, visibility === void 0 ? this.visibility : visibility, watchers === void 0 ? this.watchers : watchers, watchers_count === void 0 ? this.watchers_count : watchers_count);
  };
  PullRequest$Branch$Repo.prototype.toString = function () {
    return 'Repo(allow_merge_commit=' + Kotlin.toString(this.allow_merge_commit) + (', allow_rebase_merge=' + Kotlin.toString(this.allow_rebase_merge)) + (', allow_squash_merge=' + Kotlin.toString(this.allow_squash_merge)) + (', archive_url=' + Kotlin.toString(this.archive_url)) + (', archived=' + Kotlin.toString(this.archived)) + (', assignees_url=' + Kotlin.toString(this.assignees_url)) + (', blobs_url=' + Kotlin.toString(this.blobs_url)) + (', branches_url=' + Kotlin.toString(this.branches_url)) + (', clone_url=' + Kotlin.toString(this.clone_url)) + (', collaborators_url=' + Kotlin.toString(this.collaborators_url)) + (', comments_url=' + Kotlin.toString(this.comments_url)) + (', commits_url=' + Kotlin.toString(this.commits_url)) + (', compare_url=' + Kotlin.toString(this.compare_url)) + (', contents_url=' + Kotlin.toString(this.contents_url)) + (', contributors_url=' + Kotlin.toString(this.contributors_url)) + (', created_at=' + Kotlin.toString(this.created_at)) + (', default_branch=' + Kotlin.toString(this.default_branch)) + (', delete_branch_on_merge=' + Kotlin.toString(this.delete_branch_on_merge)) + (', deployments_url=' + Kotlin.toString(this.deployments_url)) + (', description=' + Kotlin.toString(this.description)) + (', disabled=' + Kotlin.toString(this.disabled)) + (', downloads_url=' + Kotlin.toString(this.downloads_url)) + (', events_url=' + Kotlin.toString(this.events_url)) + (', fork=' + Kotlin.toString(this.fork)) + (', forks=' + Kotlin.toString(this.forks)) + (', forks_count=' + Kotlin.toString(this.forks_count)) + (', forks_url=' + Kotlin.toString(this.forks_url)) + (', full_name=' + Kotlin.toString(this.full_name)) + (', git_commits_url=' + Kotlin.toString(this.git_commits_url)) + (', git_refs_url=' + Kotlin.toString(this.git_refs_url)) + (', git_tags_url=' + Kotlin.toString(this.git_tags_url)) + (', git_url=' + Kotlin.toString(this.git_url)) + (', has_downloads=' + Kotlin.toString(this.has_downloads)) + (', has_issues=' + Kotlin.toString(this.has_issues)) + (', has_pages=' + Kotlin.toString(this.has_pages)) + (', has_projects=' + Kotlin.toString(this.has_projects)) + (', has_wiki=' + Kotlin.toString(this.has_wiki)) + (', homepage=' + Kotlin.toString(this.homepage)) + (', hooks_url=' + Kotlin.toString(this.hooks_url)) + (', html_url=' + Kotlin.toString(this.html_url)) + (', id=' + Kotlin.toString(this.id)) + (', is_template=' + Kotlin.toString(this.is_template)) + (', issue_comment_url=' + Kotlin.toString(this.issue_comment_url)) + (', issue_events_url=' + Kotlin.toString(this.issue_events_url)) + (', issues_url=' + Kotlin.toString(this.issues_url)) + (', keys_url=' + Kotlin.toString(this.keys_url)) + (', labels_url=' + Kotlin.toString(this.labels_url)) + (', language=' + Kotlin.toString(this.language)) + (', languages_url=' + Kotlin.toString(this.languages_url)) + (', license=' + Kotlin.toString(this.license)) + (', merges_url=' + Kotlin.toString(this.merges_url)) + (', milestones_url=' + Kotlin.toString(this.milestones_url)) + (', mirror_url=' + Kotlin.toString(this.mirror_url)) + (', name=' + Kotlin.toString(this.name)) + (', network_count=' + Kotlin.toString(this.network_count)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', notifications_url=' + Kotlin.toString(this.notifications_url)) + (', open_issues=' + Kotlin.toString(this.open_issues)) + (', open_issues_count=' + Kotlin.toString(this.open_issues_count)) + (', owner=' + Kotlin.toString(this.owner)) + (', permissions=' + Kotlin.toString(this.permissions)) + (', private=' + Kotlin.toString(this.private)) + (', pulls_url=' + Kotlin.toString(this.pulls_url)) + (', pushed_at=' + Kotlin.toString(this.pushed_at)) + (', releases_url=' + Kotlin.toString(this.releases_url)) + (', size=' + Kotlin.toString(this.size)) + (', ssh_url=' + Kotlin.toString(this.ssh_url)) + (', stargazers_count=' + Kotlin.toString(this.stargazers_count)) + (', stargazers_url=' + Kotlin.toString(this.stargazers_url)) + (', statuses_url=' + Kotlin.toString(this.statuses_url)) + (', subscribers_count=' + Kotlin.toString(this.subscribers_count)) + (', subscribers_url=' + Kotlin.toString(this.subscribers_url)) + (', subscription_url=' + Kotlin.toString(this.subscription_url)) + (', svn_url=' + Kotlin.toString(this.svn_url)) + (', tags_url=' + Kotlin.toString(this.tags_url)) + (', teams_url=' + Kotlin.toString(this.teams_url)) + (', temp_clone_token=' + Kotlin.toString(this.temp_clone_token)) + (', template_repository=' + Kotlin.toString(this.template_repository)) + (', topics=' + Kotlin.toString(this.topics)) + (', trees_url=' + Kotlin.toString(this.trees_url)) + (', updated_at=' + Kotlin.toString(this.updated_at)) + (', url=' + Kotlin.toString(this.url)) + (', visibility=' + Kotlin.toString(this.visibility)) + (', watchers=' + Kotlin.toString(this.watchers)) + (', watchers_count=' + Kotlin.toString(this.watchers_count)) + ')';
  };
  PullRequest$Branch$Repo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.allow_merge_commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.allow_rebase_merge) | 0;
    result = result * 31 + Kotlin.hashCode(this.allow_squash_merge) | 0;
    result = result * 31 + Kotlin.hashCode(this.archive_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.archived) | 0;
    result = result * 31 + Kotlin.hashCode(this.assignees_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.blobs_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.branches_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.clone_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.collaborators_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.comments_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.commits_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.compare_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.contents_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.contributors_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.created_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.default_branch) | 0;
    result = result * 31 + Kotlin.hashCode(this.delete_branch_on_merge) | 0;
    result = result * 31 + Kotlin.hashCode(this.deployments_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.disabled) | 0;
    result = result * 31 + Kotlin.hashCode(this.downloads_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.events_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.fork) | 0;
    result = result * 31 + Kotlin.hashCode(this.forks) | 0;
    result = result * 31 + Kotlin.hashCode(this.forks_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.forks_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.full_name) | 0;
    result = result * 31 + Kotlin.hashCode(this.git_commits_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.git_refs_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.git_tags_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.git_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.has_downloads) | 0;
    result = result * 31 + Kotlin.hashCode(this.has_issues) | 0;
    result = result * 31 + Kotlin.hashCode(this.has_pages) | 0;
    result = result * 31 + Kotlin.hashCode(this.has_projects) | 0;
    result = result * 31 + Kotlin.hashCode(this.has_wiki) | 0;
    result = result * 31 + Kotlin.hashCode(this.homepage) | 0;
    result = result * 31 + Kotlin.hashCode(this.hooks_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.html_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.is_template) | 0;
    result = result * 31 + Kotlin.hashCode(this.issue_comment_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.issue_events_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.issues_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.keys_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.labels_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.language) | 0;
    result = result * 31 + Kotlin.hashCode(this.languages_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.license) | 0;
    result = result * 31 + Kotlin.hashCode(this.merges_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.milestones_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.mirror_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.network_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.notifications_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.open_issues) | 0;
    result = result * 31 + Kotlin.hashCode(this.open_issues_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.permissions) | 0;
    result = result * 31 + Kotlin.hashCode(this.private) | 0;
    result = result * 31 + Kotlin.hashCode(this.pulls_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.pushed_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.releases_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.ssh_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.stargazers_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.stargazers_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.statuses_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.subscribers_count) | 0;
    result = result * 31 + Kotlin.hashCode(this.subscribers_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.subscription_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.svn_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.teams_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.temp_clone_token) | 0;
    result = result * 31 + Kotlin.hashCode(this.template_repository) | 0;
    result = result * 31 + Kotlin.hashCode(this.topics) | 0;
    result = result * 31 + Kotlin.hashCode(this.trees_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.updated_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.visibility) | 0;
    result = result * 31 + Kotlin.hashCode(this.watchers) | 0;
    result = result * 31 + Kotlin.hashCode(this.watchers_count) | 0;
    return result;
  };
  PullRequest$Branch$Repo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.allow_merge_commit, other.allow_merge_commit) && Kotlin.equals(this.allow_rebase_merge, other.allow_rebase_merge) && Kotlin.equals(this.allow_squash_merge, other.allow_squash_merge) && Kotlin.equals(this.archive_url, other.archive_url) && Kotlin.equals(this.archived, other.archived) && Kotlin.equals(this.assignees_url, other.assignees_url) && Kotlin.equals(this.blobs_url, other.blobs_url) && Kotlin.equals(this.branches_url, other.branches_url) && Kotlin.equals(this.clone_url, other.clone_url) && Kotlin.equals(this.collaborators_url, other.collaborators_url) && Kotlin.equals(this.comments_url, other.comments_url) && Kotlin.equals(this.commits_url, other.commits_url) && Kotlin.equals(this.compare_url, other.compare_url) && Kotlin.equals(this.contents_url, other.contents_url) && Kotlin.equals(this.contributors_url, other.contributors_url) && Kotlin.equals(this.created_at, other.created_at) && Kotlin.equals(this.default_branch, other.default_branch) && Kotlin.equals(this.delete_branch_on_merge, other.delete_branch_on_merge) && Kotlin.equals(this.deployments_url, other.deployments_url) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.disabled, other.disabled) && Kotlin.equals(this.downloads_url, other.downloads_url) && Kotlin.equals(this.events_url, other.events_url) && Kotlin.equals(this.fork, other.fork) && Kotlin.equals(this.forks, other.forks) && Kotlin.equals(this.forks_count, other.forks_count) && Kotlin.equals(this.forks_url, other.forks_url) && Kotlin.equals(this.full_name, other.full_name) && Kotlin.equals(this.git_commits_url, other.git_commits_url) && Kotlin.equals(this.git_refs_url, other.git_refs_url) && Kotlin.equals(this.git_tags_url, other.git_tags_url) && Kotlin.equals(this.git_url, other.git_url) && Kotlin.equals(this.has_downloads, other.has_downloads) && Kotlin.equals(this.has_issues, other.has_issues) && Kotlin.equals(this.has_pages, other.has_pages) && Kotlin.equals(this.has_projects, other.has_projects) && Kotlin.equals(this.has_wiki, other.has_wiki) && Kotlin.equals(this.homepage, other.homepage) && Kotlin.equals(this.hooks_url, other.hooks_url) && Kotlin.equals(this.html_url, other.html_url) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.is_template, other.is_template) && Kotlin.equals(this.issue_comment_url, other.issue_comment_url) && Kotlin.equals(this.issue_events_url, other.issue_events_url) && Kotlin.equals(this.issues_url, other.issues_url) && Kotlin.equals(this.keys_url, other.keys_url) && Kotlin.equals(this.labels_url, other.labels_url) && Kotlin.equals(this.language, other.language) && Kotlin.equals(this.languages_url, other.languages_url) && Kotlin.equals(this.license, other.license) && Kotlin.equals(this.merges_url, other.merges_url) && Kotlin.equals(this.milestones_url, other.milestones_url) && Kotlin.equals(this.mirror_url, other.mirror_url) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.network_count, other.network_count) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.notifications_url, other.notifications_url) && Kotlin.equals(this.open_issues, other.open_issues) && Kotlin.equals(this.open_issues_count, other.open_issues_count) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.permissions, other.permissions) && Kotlin.equals(this.private, other.private) && Kotlin.equals(this.pulls_url, other.pulls_url) && Kotlin.equals(this.pushed_at, other.pushed_at) && Kotlin.equals(this.releases_url, other.releases_url) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.ssh_url, other.ssh_url) && Kotlin.equals(this.stargazers_count, other.stargazers_count) && Kotlin.equals(this.stargazers_url, other.stargazers_url) && Kotlin.equals(this.statuses_url, other.statuses_url) && Kotlin.equals(this.subscribers_count, other.subscribers_count) && Kotlin.equals(this.subscribers_url, other.subscribers_url) && Kotlin.equals(this.subscription_url, other.subscription_url) && Kotlin.equals(this.svn_url, other.svn_url) && Kotlin.equals(this.tags_url, other.tags_url) && Kotlin.equals(this.teams_url, other.teams_url) && Kotlin.equals(this.temp_clone_token, other.temp_clone_token) && Kotlin.equals(this.template_repository, other.template_repository) && Kotlin.equals(this.topics, other.topics) && Kotlin.equals(this.trees_url, other.trees_url) && Kotlin.equals(this.updated_at, other.updated_at) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.visibility, other.visibility) && Kotlin.equals(this.watchers, other.watchers) && Kotlin.equals(this.watchers_count, other.watchers_count)))));
  };
  function PullRequest$Branch$Companion() {
    PullRequest$Branch$Companion_instance = this;
  }
  PullRequest$Branch$Companion.prototype.serializer = function () {
    return PullRequest$Branch$$serializer_getInstance();
  };
  PullRequest$Branch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Branch$Companion_instance = null;
  function PullRequest$Branch$Companion_getInstance() {
    if (PullRequest$Branch$Companion_instance === null) {
      new PullRequest$Branch$Companion();
    }return PullRequest$Branch$Companion_instance;
  }
  function PullRequest$Branch$$serializer() {
    this.descriptor_x9oeng$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Branch', this, 5);
    this.descriptor.addElement_ivxn3r$('label', false);
    this.descriptor.addElement_ivxn3r$('ref', false);
    this.descriptor.addElement_ivxn3r$('repo', false);
    this.descriptor.addElement_ivxn3r$('sha', false);
    this.descriptor.addElement_ivxn3r$('user', false);
    PullRequest$Branch$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Branch$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_x9oeng$_0;
    }
  });
  PullRequest$Branch$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.label);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.ref);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 2, PullRequest$Branch$Repo$$serializer_getInstance(), value.repo);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.sha);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 4, GithubUser$$serializer_getInstance(), value.user);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Branch$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeSerializableElement_12e8id$(this.descriptor, 2, PullRequest$Branch$Repo$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeSerializableElement_12e8id$(this.descriptor, 4, GithubUser$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$PullRequest$Branch_init(bitMask0, local0, local1, local2, local3, local4, null);
  };
  PullRequest$Branch$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, PullRequest$Branch$Repo$$serializer_getInstance(), internal.StringSerializer, GithubUser$$serializer_getInstance()];
  };
  PullRequest$Branch$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Branch$$serializer_instance = null;
  function PullRequest$Branch$$serializer_getInstance() {
    if (PullRequest$Branch$$serializer_instance === null) {
      new PullRequest$Branch$$serializer();
    }return PullRequest$Branch$$serializer_instance;
  }
  function PullRequest$PullRequest$Branch_init(seen1, label, ref, repo, sha, user, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Branch.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('label');
    else
      $this.label = label;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('ref');
    else
      $this.ref = ref;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('repo');
    else
      $this.repo = repo;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('sha');
    else
      $this.sha = sha;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('user');
    else
      $this.user = user;
    return $this;
  }
  PullRequest$Branch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Branch',
    interfaces: []
  };
  PullRequest$Branch.prototype.component1 = function () {
    return this.label;
  };
  PullRequest$Branch.prototype.component2 = function () {
    return this.ref;
  };
  PullRequest$Branch.prototype.component3 = function () {
    return this.repo;
  };
  PullRequest$Branch.prototype.component4 = function () {
    return this.sha;
  };
  PullRequest$Branch.prototype.component5 = function () {
    return this.user;
  };
  PullRequest$Branch.prototype.copy_exjnb8$ = function (label, ref, repo, sha, user) {
    return new PullRequest$Branch(label === void 0 ? this.label : label, ref === void 0 ? this.ref : ref, repo === void 0 ? this.repo : repo, sha === void 0 ? this.sha : sha, user === void 0 ? this.user : user);
  };
  PullRequest$Branch.prototype.toString = function () {
    return 'Branch(label=' + Kotlin.toString(this.label) + (', ref=' + Kotlin.toString(this.ref)) + (', repo=' + Kotlin.toString(this.repo)) + (', sha=' + Kotlin.toString(this.sha)) + (', user=' + Kotlin.toString(this.user)) + ')';
  };
  PullRequest$Branch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.ref) | 0;
    result = result * 31 + Kotlin.hashCode(this.repo) | 0;
    result = result * 31 + Kotlin.hashCode(this.sha) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    return result;
  };
  PullRequest$Branch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.label, other.label) && Kotlin.equals(this.ref, other.ref) && Kotlin.equals(this.repo, other.repo) && Kotlin.equals(this.sha, other.sha) && Kotlin.equals(this.user, other.user)))));
  };
  function PullRequest$Label(color, default_0, description, id, name, node_id, url) {
    PullRequest$Label$Companion_getInstance();
    this.color = color;
    this.default = default_0;
    this.description = description;
    this.id = id;
    this.name = name;
    this.node_id = node_id;
    this.url = url;
  }
  function PullRequest$Label$Companion() {
    PullRequest$Label$Companion_instance = this;
  }
  PullRequest$Label$Companion.prototype.serializer = function () {
    return PullRequest$Label$$serializer_getInstance();
  };
  PullRequest$Label$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Label$Companion_instance = null;
  function PullRequest$Label$Companion_getInstance() {
    if (PullRequest$Label$Companion_instance === null) {
      new PullRequest$Label$Companion();
    }return PullRequest$Label$Companion_instance;
  }
  function PullRequest$Label$$serializer() {
    this.descriptor_f31hp0$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.Label', this, 7);
    this.descriptor.addElement_ivxn3r$('color', false);
    this.descriptor.addElement_ivxn3r$('default', false);
    this.descriptor.addElement_ivxn3r$('description', false);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    PullRequest$Label$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$Label$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_f31hp0$_0;
    }
  });
  PullRequest$Label$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.color);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 1, value.default);
    output.encodeStringElement_iij8qq$(this.descriptor, 2, value.description);
    output.encodeIntElement_ptg7oe$(this.descriptor, 3, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.name);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.node_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 6, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$Label$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeBooleanElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeStringElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeIntElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$PullRequest$Label_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, null);
  };
  PullRequest$Label$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.BooleanSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  PullRequest$Label$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$Label$$serializer_instance = null;
  function PullRequest$Label$$serializer_getInstance() {
    if (PullRequest$Label$$serializer_instance === null) {
      new PullRequest$Label$$serializer();
    }return PullRequest$Label$$serializer_instance;
  }
  function PullRequest$PullRequest$Label_init(seen1, color, default_0, description, id, name, node_id, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$Label.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('color');
    else
      $this.color = color;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('default');
    else
      $this.default = default_0;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('description');
    else
      $this.description = description;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  PullRequest$Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: []
  };
  PullRequest$Label.prototype.component1 = function () {
    return this.color;
  };
  PullRequest$Label.prototype.component2 = function () {
    return this.default;
  };
  PullRequest$Label.prototype.component3 = function () {
    return this.description;
  };
  PullRequest$Label.prototype.component4 = function () {
    return this.id;
  };
  PullRequest$Label.prototype.component5 = function () {
    return this.name;
  };
  PullRequest$Label.prototype.component6 = function () {
    return this.node_id;
  };
  PullRequest$Label.prototype.component7 = function () {
    return this.url;
  };
  PullRequest$Label.prototype.copy_6niydl$ = function (color, default_0, description, id, name, node_id, url) {
    return new PullRequest$Label(color === void 0 ? this.color : color, default_0 === void 0 ? this.default : default_0, description === void 0 ? this.description : description, id === void 0 ? this.id : id, name === void 0 ? this.name : name, node_id === void 0 ? this.node_id : node_id, url === void 0 ? this.url : url);
  };
  PullRequest$Label.prototype.toString = function () {
    return 'Label(color=' + Kotlin.toString(this.color) + (', default=' + Kotlin.toString(this.default)) + (', description=' + Kotlin.toString(this.description)) + (', id=' + Kotlin.toString(this.id)) + (', name=' + Kotlin.toString(this.name)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  PullRequest$Label.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    result = result * 31 + Kotlin.hashCode(this.default) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  PullRequest$Label.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.color, other.color) && Kotlin.equals(this.default, other.default) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.url, other.url)))));
  };
  function PullRequest$RequestedTeam(description, html_url, id, members_url, name, node_id, permission, privacy, repositories_url, slug, url) {
    PullRequest$RequestedTeam$Companion_getInstance();
    this.description = description;
    this.html_url = html_url;
    this.id = id;
    this.members_url = members_url;
    this.name = name;
    this.node_id = node_id;
    this.permission = permission;
    this.privacy = privacy;
    this.repositories_url = repositories_url;
    this.slug = slug;
    this.url = url;
  }
  function PullRequest$RequestedTeam$Companion() {
    PullRequest$RequestedTeam$Companion_instance = this;
  }
  PullRequest$RequestedTeam$Companion.prototype.serializer = function () {
    return PullRequest$RequestedTeam$$serializer_getInstance();
  };
  PullRequest$RequestedTeam$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$RequestedTeam$Companion_instance = null;
  function PullRequest$RequestedTeam$Companion_getInstance() {
    if (PullRequest$RequestedTeam$Companion_instance === null) {
      new PullRequest$RequestedTeam$Companion();
    }return PullRequest$RequestedTeam$Companion_instance;
  }
  function PullRequest$RequestedTeam$$serializer() {
    this.descriptor_d64ezh$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest.RequestedTeam', this, 11);
    this.descriptor.addElement_ivxn3r$('description', false);
    this.descriptor.addElement_ivxn3r$('html_url', false);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('members_url', false);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('permission', false);
    this.descriptor.addElement_ivxn3r$('privacy', false);
    this.descriptor.addElement_ivxn3r$('repositories_url', false);
    this.descriptor.addElement_ivxn3r$('slug', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    PullRequest$RequestedTeam$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$RequestedTeam$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_d64ezh$_0;
    }
  });
  PullRequest$RequestedTeam$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.description);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.html_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 2, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 3, value.members_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.name);
    output.encodeStringElement_iij8qq$(this.descriptor, 5, value.node_id);
    output.encodeStringElement_iij8qq$(this.descriptor, 6, value.permission);
    output.encodeStringElement_iij8qq$(this.descriptor, 7, value.privacy);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.repositories_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 9, value.slug);
    output.encodeStringElement_iij8qq$(this.descriptor, 10, value.url);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$RequestedTeam$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeIntElement_szpzho$(this.descriptor, 2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeStringElement_szpzho$(this.descriptor, 3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeStringElement_szpzho$(this.descriptor, 5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeStringElement_szpzho$(this.descriptor, 6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeStringElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeStringElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeStringElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest$PullRequest$RequestedTeam_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, null);
  };
  PullRequest$RequestedTeam$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer];
  };
  PullRequest$RequestedTeam$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$RequestedTeam$$serializer_instance = null;
  function PullRequest$RequestedTeam$$serializer_getInstance() {
    if (PullRequest$RequestedTeam$$serializer_instance === null) {
      new PullRequest$RequestedTeam$$serializer();
    }return PullRequest$RequestedTeam$$serializer_instance;
  }
  function PullRequest$PullRequest$RequestedTeam_init(seen1, description, html_url, id, members_url, name, node_id, permission, privacy, repositories_url, slug, url, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest$RequestedTeam.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('description');
    else
      $this.description = description;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('html_url');
    else
      $this.html_url = html_url;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('members_url');
    else
      $this.members_url = members_url;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('name');
    else
      $this.name = name;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('permission');
    else
      $this.permission = permission;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('privacy');
    else
      $this.privacy = privacy;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('repositories_url');
    else
      $this.repositories_url = repositories_url;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('slug');
    else
      $this.slug = slug;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    return $this;
  }
  PullRequest$RequestedTeam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequestedTeam',
    interfaces: []
  };
  PullRequest$RequestedTeam.prototype.component1 = function () {
    return this.description;
  };
  PullRequest$RequestedTeam.prototype.component2 = function () {
    return this.html_url;
  };
  PullRequest$RequestedTeam.prototype.component3 = function () {
    return this.id;
  };
  PullRequest$RequestedTeam.prototype.component4 = function () {
    return this.members_url;
  };
  PullRequest$RequestedTeam.prototype.component5 = function () {
    return this.name;
  };
  PullRequest$RequestedTeam.prototype.component6 = function () {
    return this.node_id;
  };
  PullRequest$RequestedTeam.prototype.component7 = function () {
    return this.permission;
  };
  PullRequest$RequestedTeam.prototype.component8 = function () {
    return this.privacy;
  };
  PullRequest$RequestedTeam.prototype.component9 = function () {
    return this.repositories_url;
  };
  PullRequest$RequestedTeam.prototype.component10 = function () {
    return this.slug;
  };
  PullRequest$RequestedTeam.prototype.component11 = function () {
    return this.url;
  };
  PullRequest$RequestedTeam.prototype.copy_frbhla$ = function (description, html_url, id, members_url, name, node_id, permission, privacy, repositories_url, slug, url) {
    return new PullRequest$RequestedTeam(description === void 0 ? this.description : description, html_url === void 0 ? this.html_url : html_url, id === void 0 ? this.id : id, members_url === void 0 ? this.members_url : members_url, name === void 0 ? this.name : name, node_id === void 0 ? this.node_id : node_id, permission === void 0 ? this.permission : permission, privacy === void 0 ? this.privacy : privacy, repositories_url === void 0 ? this.repositories_url : repositories_url, slug === void 0 ? this.slug : slug, url === void 0 ? this.url : url);
  };
  PullRequest$RequestedTeam.prototype.toString = function () {
    return 'RequestedTeam(description=' + Kotlin.toString(this.description) + (', html_url=' + Kotlin.toString(this.html_url)) + (', id=' + Kotlin.toString(this.id)) + (', members_url=' + Kotlin.toString(this.members_url)) + (', name=' + Kotlin.toString(this.name)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', permission=' + Kotlin.toString(this.permission)) + (', privacy=' + Kotlin.toString(this.privacy)) + (', repositories_url=' + Kotlin.toString(this.repositories_url)) + (', slug=' + Kotlin.toString(this.slug)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  PullRequest$RequestedTeam.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.html_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.members_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.permission) | 0;
    result = result * 31 + Kotlin.hashCode(this.privacy) | 0;
    result = result * 31 + Kotlin.hashCode(this.repositories_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  PullRequest$RequestedTeam.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.description, other.description) && Kotlin.equals(this.html_url, other.html_url) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.members_url, other.members_url) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.permission, other.permission) && Kotlin.equals(this.privacy, other.privacy) && Kotlin.equals(this.repositories_url, other.repositories_url) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.url, other.url)))));
  };
  function PullRequest$Companion() {
    PullRequest$Companion_instance = this;
  }
  PullRequest$Companion.prototype.serializer = function () {
    return PullRequest$$serializer_getInstance();
  };
  PullRequest$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PullRequest$Companion_instance = null;
  function PullRequest$Companion_getInstance() {
    if (PullRequest$Companion_instance === null) {
      new PullRequest$Companion();
    }return PullRequest$Companion_instance;
  }
  function PullRequest$$serializer() {
    this.descriptor_rxq73u$_0 = new PluginGeneratedSerialDescriptor('data.response.PullRequest', this, 36);
    this.descriptor.addElement_ivxn3r$('_links', false);
    this.descriptor.addElement_ivxn3r$('active_lock_reason', false);
    this.descriptor.addElement_ivxn3r$('assignee', false);
    this.descriptor.addElement_ivxn3r$('assignees', false);
    this.descriptor.addElement_ivxn3r$('author_association', false);
    this.descriptor.addElement_ivxn3r$('auto_merge', false);
    this.descriptor.addElement_ivxn3r$('base', false);
    this.descriptor.addElement_ivxn3r$('body', false);
    this.descriptor.addElement_ivxn3r$('closed_at', false);
    this.descriptor.addElement_ivxn3r$('comments_url', false);
    this.descriptor.addElement_ivxn3r$('commits_url', false);
    this.descriptor.addElement_ivxn3r$('created_at', false);
    this.descriptor.addElement_ivxn3r$('diff_url', false);
    this.descriptor.addElement_ivxn3r$('draft', false);
    this.descriptor.addElement_ivxn3r$('head', false);
    this.descriptor.addElement_ivxn3r$('html_url', false);
    this.descriptor.addElement_ivxn3r$('id', false);
    this.descriptor.addElement_ivxn3r$('issue_url', false);
    this.descriptor.addElement_ivxn3r$('labels', false);
    this.descriptor.addElement_ivxn3r$('locked', false);
    this.descriptor.addElement_ivxn3r$('merge_commit_sha', false);
    this.descriptor.addElement_ivxn3r$('merged_at', false);
    this.descriptor.addElement_ivxn3r$('milestone', false);
    this.descriptor.addElement_ivxn3r$('node_id', false);
    this.descriptor.addElement_ivxn3r$('number', false);
    this.descriptor.addElement_ivxn3r$('patch_url', false);
    this.descriptor.addElement_ivxn3r$('requested_reviewers', false);
    this.descriptor.addElement_ivxn3r$('requested_teams', false);
    this.descriptor.addElement_ivxn3r$('review_comment_url', false);
    this.descriptor.addElement_ivxn3r$('review_comments_url', false);
    this.descriptor.addElement_ivxn3r$('state', false);
    this.descriptor.addElement_ivxn3r$('statuses_url', false);
    this.descriptor.addElement_ivxn3r$('title', false);
    this.descriptor.addElement_ivxn3r$('updated_at', false);
    this.descriptor.addElement_ivxn3r$('url', false);
    this.descriptor.addElement_ivxn3r$('user', false);
    PullRequest$$serializer_instance = this;
  }
  Object.defineProperty(PullRequest$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_rxq73u$_0;
    }
  });
  PullRequest$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, PullRequest$Links$$serializer_getInstance(), value._links);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.active_lock_reason);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, GithubUser$$serializer_getInstance(), value.assignee);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 3, new ArrayListSerializer(GithubUser$$serializer_getInstance()), value.assignees);
    output.encodeStringElement_iij8qq$(this.descriptor, 4, value.author_association);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 5, internal.StringSerializer, value.auto_merge);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 6, PullRequest$Branch$$serializer_getInstance(), value.base);
    output.encodeStringElement_iij8qq$(this.descriptor, 7, value.body);
    output.encodeStringElement_iij8qq$(this.descriptor, 8, value.closed_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 9, value.comments_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 10, value.commits_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 11, value.created_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 12, value.diff_url);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 13, value.draft);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 14, PullRequest$Branch$$serializer_getInstance(), value.head);
    output.encodeStringElement_iij8qq$(this.descriptor, 15, value.html_url);
    output.encodeIntElement_ptg7oe$(this.descriptor, 16, value.id);
    output.encodeStringElement_iij8qq$(this.descriptor, 17, value.issue_url);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 18, new ArrayListSerializer(PullRequest$Label$$serializer_getInstance()), value.labels);
    output.encodeBooleanElement_qh7jdn$(this.descriptor, 19, value.locked);
    output.encodeStringElement_iij8qq$(this.descriptor, 20, value.merge_commit_sha);
    output.encodeStringElement_iij8qq$(this.descriptor, 21, value.merged_at);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 22, Milestone$$serializer_getInstance(), value.milestone);
    output.encodeStringElement_iij8qq$(this.descriptor, 23, value.node_id);
    output.encodeIntElement_ptg7oe$(this.descriptor, 24, value.number);
    output.encodeStringElement_iij8qq$(this.descriptor, 25, value.patch_url);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 26, new ArrayListSerializer(GithubUser$$serializer_getInstance()), value.requested_reviewers);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 27, new ArrayListSerializer(PullRequest$RequestedTeam$$serializer_getInstance()), value.requested_teams);
    output.encodeStringElement_iij8qq$(this.descriptor, 28, value.review_comment_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 29, value.review_comments_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 30, value.state);
    output.encodeStringElement_iij8qq$(this.descriptor, 31, value.statuses_url);
    output.encodeStringElement_iij8qq$(this.descriptor, 32, value.title);
    output.encodeStringElement_iij8qq$(this.descriptor, 33, value.updated_at);
    output.encodeStringElement_iij8qq$(this.descriptor, 34, value.url);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 35, GithubUser$$serializer_getInstance(), value.user);
    output.endStructure_24f42q$(this.descriptor);
  };
  PullRequest$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0, bitMask1 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6
    , local7
    , local8
    , local9
    , local10
    , local11
    , local12
    , local13
    , local14
    , local15
    , local16
    , local17
    , local18
    , local19
    , local20
    , local21
    , local22
    , local23
    , local24
    , local25
    , local26
    , local27
    , local28
    , local29
    , local30
    , local31
    , local32
    , local33
    , local34
    , local35;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, PullRequest$Links$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, GithubUser$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 3, new ArrayListSerializer(GithubUser$$serializer_getInstance()), local3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeStringElement_szpzho$(this.descriptor, 4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 5, internal.StringSerializer, local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeSerializableElement_12e8id$(this.descriptor, 6, PullRequest$Branch$$serializer_getInstance(), local6);
          bitMask0 |= 64;
          break;
        case 7:
          local7 = input.decodeStringElement_szpzho$(this.descriptor, 7);
          bitMask0 |= 128;
          break;
        case 8:
          local8 = input.decodeStringElement_szpzho$(this.descriptor, 8);
          bitMask0 |= 256;
          break;
        case 9:
          local9 = input.decodeStringElement_szpzho$(this.descriptor, 9);
          bitMask0 |= 512;
          break;
        case 10:
          local10 = input.decodeStringElement_szpzho$(this.descriptor, 10);
          bitMask0 |= 1024;
          break;
        case 11:
          local11 = input.decodeStringElement_szpzho$(this.descriptor, 11);
          bitMask0 |= 2048;
          break;
        case 12:
          local12 = input.decodeStringElement_szpzho$(this.descriptor, 12);
          bitMask0 |= 4096;
          break;
        case 13:
          local13 = input.decodeBooleanElement_szpzho$(this.descriptor, 13);
          bitMask0 |= 8192;
          break;
        case 14:
          local14 = input.decodeSerializableElement_12e8id$(this.descriptor, 14, PullRequest$Branch$$serializer_getInstance(), local14);
          bitMask0 |= 16384;
          break;
        case 15:
          local15 = input.decodeStringElement_szpzho$(this.descriptor, 15);
          bitMask0 |= 32768;
          break;
        case 16:
          local16 = input.decodeIntElement_szpzho$(this.descriptor, 16);
          bitMask0 |= 65536;
          break;
        case 17:
          local17 = input.decodeStringElement_szpzho$(this.descriptor, 17);
          bitMask0 |= 131072;
          break;
        case 18:
          local18 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 18, new ArrayListSerializer(PullRequest$Label$$serializer_getInstance()), local18);
          bitMask0 |= 262144;
          break;
        case 19:
          local19 = input.decodeBooleanElement_szpzho$(this.descriptor, 19);
          bitMask0 |= 524288;
          break;
        case 20:
          local20 = input.decodeStringElement_szpzho$(this.descriptor, 20);
          bitMask0 |= 1048576;
          break;
        case 21:
          local21 = input.decodeStringElement_szpzho$(this.descriptor, 21);
          bitMask0 |= 2097152;
          break;
        case 22:
          local22 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 22, Milestone$$serializer_getInstance(), local22);
          bitMask0 |= 4194304;
          break;
        case 23:
          local23 = input.decodeStringElement_szpzho$(this.descriptor, 23);
          bitMask0 |= 8388608;
          break;
        case 24:
          local24 = input.decodeIntElement_szpzho$(this.descriptor, 24);
          bitMask0 |= 16777216;
          break;
        case 25:
          local25 = input.decodeStringElement_szpzho$(this.descriptor, 25);
          bitMask0 |= 33554432;
          break;
        case 26:
          local26 = input.decodeSerializableElement_12e8id$(this.descriptor, 26, new ArrayListSerializer(GithubUser$$serializer_getInstance()), local26);
          bitMask0 |= 67108864;
          break;
        case 27:
          local27 = input.decodeSerializableElement_12e8id$(this.descriptor, 27, new ArrayListSerializer(PullRequest$RequestedTeam$$serializer_getInstance()), local27);
          bitMask0 |= 134217728;
          break;
        case 28:
          local28 = input.decodeStringElement_szpzho$(this.descriptor, 28);
          bitMask0 |= 268435456;
          break;
        case 29:
          local29 = input.decodeStringElement_szpzho$(this.descriptor, 29);
          bitMask0 |= 536870912;
          break;
        case 30:
          local30 = input.decodeStringElement_szpzho$(this.descriptor, 30);
          bitMask0 |= 1073741824;
          break;
        case 31:
          local31 = input.decodeStringElement_szpzho$(this.descriptor, 31);
          bitMask0 |= -2147483648;
          break;
        case 32:
          local32 = input.decodeStringElement_szpzho$(this.descriptor, 32);
          bitMask1 |= 1;
          break;
        case 33:
          local33 = input.decodeStringElement_szpzho$(this.descriptor, 33);
          bitMask1 |= 2;
          break;
        case 34:
          local34 = input.decodeStringElement_szpzho$(this.descriptor, 34);
          bitMask1 |= 4;
          break;
        case 35:
          local35 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 35, GithubUser$$serializer_getInstance(), local35);
          bitMask1 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return PullRequest_init(bitMask0, bitMask1, local0, local1, local2, local3, local4, local5, local6, local7, local8, local9, local10, local11, local12, local13, local14, local15, local16, local17, local18, local19, local20, local21, local22, local23, local24, local25, local26, local27, local28, local29, local30, local31, local32, local33, local34, local35, null);
  };
  PullRequest$$serializer.prototype.childSerializers = function () {
    return [PullRequest$Links$$serializer_getInstance(), internal.StringSerializer, new NullableSerializer(GithubUser$$serializer_getInstance()), new NullableSerializer(new ArrayListSerializer(GithubUser$$serializer_getInstance())), internal.StringSerializer, new NullableSerializer(internal.StringSerializer), PullRequest$Branch$$serializer_getInstance(), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.BooleanSerializer, PullRequest$Branch$$serializer_getInstance(), internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, new NullableSerializer(new ArrayListSerializer(PullRequest$Label$$serializer_getInstance())), internal.BooleanSerializer, internal.StringSerializer, internal.StringSerializer, new NullableSerializer(Milestone$$serializer_getInstance()), internal.StringSerializer, internal.IntSerializer, internal.StringSerializer, new ArrayListSerializer(GithubUser$$serializer_getInstance()), new ArrayListSerializer(PullRequest$RequestedTeam$$serializer_getInstance()), internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, internal.StringSerializer, new NullableSerializer(GithubUser$$serializer_getInstance())];
  };
  PullRequest$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var PullRequest$$serializer_instance = null;
  function PullRequest$$serializer_getInstance() {
    if (PullRequest$$serializer_instance === null) {
      new PullRequest$$serializer();
    }return PullRequest$$serializer_instance;
  }
  function PullRequest_init(seen1, seen2, _links, active_lock_reason, assignee, assignees, author_association, auto_merge, base, body, closed_at, comments_url, commits_url, created_at, diff_url, draft, head, html_url, id, issue_url, labels, locked, merge_commit_sha, merged_at, milestone, node_id, number, patch_url, requested_reviewers, requested_teams, review_comment_url, review_comments_url, state, statuses_url, title, updated_at, url, user, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(PullRequest.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('_links');
    else
      $this._links = _links;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('active_lock_reason');
    else
      $this.active_lock_reason = active_lock_reason;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('assignee');
    else
      $this.assignee = assignee;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('assignees');
    else
      $this.assignees = assignees;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('author_association');
    else
      $this.author_association = author_association;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('auto_merge');
    else
      $this.auto_merge = auto_merge;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('base');
    else
      $this.base = base;
    if ((seen1 & 128) === 0)
      throw MissingFieldException_init('body');
    else
      $this.body = body;
    if ((seen1 & 256) === 0)
      throw MissingFieldException_init('closed_at');
    else
      $this.closed_at = closed_at;
    if ((seen1 & 512) === 0)
      throw MissingFieldException_init('comments_url');
    else
      $this.comments_url = comments_url;
    if ((seen1 & 1024) === 0)
      throw MissingFieldException_init('commits_url');
    else
      $this.commits_url = commits_url;
    if ((seen1 & 2048) === 0)
      throw MissingFieldException_init('created_at');
    else
      $this.created_at = created_at;
    if ((seen1 & 4096) === 0)
      throw MissingFieldException_init('diff_url');
    else
      $this.diff_url = diff_url;
    if ((seen1 & 8192) === 0)
      throw MissingFieldException_init('draft');
    else
      $this.draft = draft;
    if ((seen1 & 16384) === 0)
      throw MissingFieldException_init('head');
    else
      $this.head = head;
    if ((seen1 & 32768) === 0)
      throw MissingFieldException_init('html_url');
    else
      $this.html_url = html_url;
    if ((seen1 & 65536) === 0)
      throw MissingFieldException_init('id');
    else
      $this.id = id;
    if ((seen1 & 131072) === 0)
      throw MissingFieldException_init('issue_url');
    else
      $this.issue_url = issue_url;
    if ((seen1 & 262144) === 0)
      throw MissingFieldException_init('labels');
    else
      $this.labels = labels;
    if ((seen1 & 524288) === 0)
      throw MissingFieldException_init('locked');
    else
      $this.locked = locked;
    if ((seen1 & 1048576) === 0)
      throw MissingFieldException_init('merge_commit_sha');
    else
      $this.merge_commit_sha = merge_commit_sha;
    if ((seen1 & 2097152) === 0)
      throw MissingFieldException_init('merged_at');
    else
      $this.merged_at = merged_at;
    if ((seen1 & 4194304) === 0)
      throw MissingFieldException_init('milestone');
    else
      $this.milestone = milestone;
    if ((seen1 & 8388608) === 0)
      throw MissingFieldException_init('node_id');
    else
      $this.node_id = node_id;
    if ((seen1 & 16777216) === 0)
      throw MissingFieldException_init('number');
    else
      $this.number = number;
    if ((seen1 & 33554432) === 0)
      throw MissingFieldException_init('patch_url');
    else
      $this.patch_url = patch_url;
    if ((seen1 & 67108864) === 0)
      throw MissingFieldException_init('requested_reviewers');
    else
      $this.requested_reviewers = requested_reviewers;
    if ((seen1 & 134217728) === 0)
      throw MissingFieldException_init('requested_teams');
    else
      $this.requested_teams = requested_teams;
    if ((seen1 & 268435456) === 0)
      throw MissingFieldException_init('review_comment_url');
    else
      $this.review_comment_url = review_comment_url;
    if ((seen1 & 536870912) === 0)
      throw MissingFieldException_init('review_comments_url');
    else
      $this.review_comments_url = review_comments_url;
    if ((seen1 & 1073741824) === 0)
      throw MissingFieldException_init('state');
    else
      $this.state = state;
    if ((seen1 & -2147483648) === 0)
      throw MissingFieldException_init('statuses_url');
    else
      $this.statuses_url = statuses_url;
    if ((seen2 & 1) === 0)
      throw MissingFieldException_init('title');
    else
      $this.title = title;
    if ((seen2 & 2) === 0)
      throw MissingFieldException_init('updated_at');
    else
      $this.updated_at = updated_at;
    if ((seen2 & 4) === 0)
      throw MissingFieldException_init('url');
    else
      $this.url = url;
    if ((seen2 & 8) === 0)
      throw MissingFieldException_init('user');
    else
      $this.user = user;
    return $this;
  }
  PullRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PullRequest',
    interfaces: []
  };
  PullRequest.prototype.component1 = function () {
    return this._links;
  };
  PullRequest.prototype.component2 = function () {
    return this.active_lock_reason;
  };
  PullRequest.prototype.component3 = function () {
    return this.assignee;
  };
  PullRequest.prototype.component4 = function () {
    return this.assignees;
  };
  PullRequest.prototype.component5 = function () {
    return this.author_association;
  };
  PullRequest.prototype.component6 = function () {
    return this.auto_merge;
  };
  PullRequest.prototype.component7 = function () {
    return this.base;
  };
  PullRequest.prototype.component8 = function () {
    return this.body;
  };
  PullRequest.prototype.component9 = function () {
    return this.closed_at;
  };
  PullRequest.prototype.component10 = function () {
    return this.comments_url;
  };
  PullRequest.prototype.component11 = function () {
    return this.commits_url;
  };
  PullRequest.prototype.component12 = function () {
    return this.created_at;
  };
  PullRequest.prototype.component13 = function () {
    return this.diff_url;
  };
  PullRequest.prototype.component14 = function () {
    return this.draft;
  };
  PullRequest.prototype.component15 = function () {
    return this.head;
  };
  PullRequest.prototype.component16 = function () {
    return this.html_url;
  };
  PullRequest.prototype.component17 = function () {
    return this.id;
  };
  PullRequest.prototype.component18 = function () {
    return this.issue_url;
  };
  PullRequest.prototype.component19 = function () {
    return this.labels;
  };
  PullRequest.prototype.component20 = function () {
    return this.locked;
  };
  PullRequest.prototype.component21 = function () {
    return this.merge_commit_sha;
  };
  PullRequest.prototype.component22 = function () {
    return this.merged_at;
  };
  PullRequest.prototype.component23 = function () {
    return this.milestone;
  };
  PullRequest.prototype.component24 = function () {
    return this.node_id;
  };
  PullRequest.prototype.component25 = function () {
    return this.number;
  };
  PullRequest.prototype.component26 = function () {
    return this.patch_url;
  };
  PullRequest.prototype.component27 = function () {
    return this.requested_reviewers;
  };
  PullRequest.prototype.component28 = function () {
    return this.requested_teams;
  };
  PullRequest.prototype.component29 = function () {
    return this.review_comment_url;
  };
  PullRequest.prototype.component30 = function () {
    return this.review_comments_url;
  };
  PullRequest.prototype.component31 = function () {
    return this.state;
  };
  PullRequest.prototype.component32 = function () {
    return this.statuses_url;
  };
  PullRequest.prototype.component33 = function () {
    return this.title;
  };
  PullRequest.prototype.component34 = function () {
    return this.updated_at;
  };
  PullRequest.prototype.component35 = function () {
    return this.url;
  };
  PullRequest.prototype.component36 = function () {
    return this.user;
  };
  PullRequest.prototype.copy_bk7vx4$ = function (_links, active_lock_reason, assignee, assignees, author_association, auto_merge, base, body, closed_at, comments_url, commits_url, created_at, diff_url, draft, head, html_url, id, issue_url, labels, locked, merge_commit_sha, merged_at, milestone, node_id, number, patch_url, requested_reviewers, requested_teams, review_comment_url, review_comments_url, state, statuses_url, title, updated_at, url, user) {
    return new PullRequest(_links === void 0 ? this._links : _links, active_lock_reason === void 0 ? this.active_lock_reason : active_lock_reason, assignee === void 0 ? this.assignee : assignee, assignees === void 0 ? this.assignees : assignees, author_association === void 0 ? this.author_association : author_association, auto_merge === void 0 ? this.auto_merge : auto_merge, base === void 0 ? this.base : base, body === void 0 ? this.body : body, closed_at === void 0 ? this.closed_at : closed_at, comments_url === void 0 ? this.comments_url : comments_url, commits_url === void 0 ? this.commits_url : commits_url, created_at === void 0 ? this.created_at : created_at, diff_url === void 0 ? this.diff_url : diff_url, draft === void 0 ? this.draft : draft, head === void 0 ? this.head : head, html_url === void 0 ? this.html_url : html_url, id === void 0 ? this.id : id, issue_url === void 0 ? this.issue_url : issue_url, labels === void 0 ? this.labels : labels, locked === void 0 ? this.locked : locked, merge_commit_sha === void 0 ? this.merge_commit_sha : merge_commit_sha, merged_at === void 0 ? this.merged_at : merged_at, milestone === void 0 ? this.milestone : milestone, node_id === void 0 ? this.node_id : node_id, number === void 0 ? this.number : number, patch_url === void 0 ? this.patch_url : patch_url, requested_reviewers === void 0 ? this.requested_reviewers : requested_reviewers, requested_teams === void 0 ? this.requested_teams : requested_teams, review_comment_url === void 0 ? this.review_comment_url : review_comment_url, review_comments_url === void 0 ? this.review_comments_url : review_comments_url, state === void 0 ? this.state : state, statuses_url === void 0 ? this.statuses_url : statuses_url, title === void 0 ? this.title : title, updated_at === void 0 ? this.updated_at : updated_at, url === void 0 ? this.url : url, user === void 0 ? this.user : user);
  };
  PullRequest.prototype.toString = function () {
    return 'PullRequest(_links=' + Kotlin.toString(this._links) + (', active_lock_reason=' + Kotlin.toString(this.active_lock_reason)) + (', assignee=' + Kotlin.toString(this.assignee)) + (', assignees=' + Kotlin.toString(this.assignees)) + (', author_association=' + Kotlin.toString(this.author_association)) + (', auto_merge=' + Kotlin.toString(this.auto_merge)) + (', base=' + Kotlin.toString(this.base)) + (', body=' + Kotlin.toString(this.body)) + (', closed_at=' + Kotlin.toString(this.closed_at)) + (', comments_url=' + Kotlin.toString(this.comments_url)) + (', commits_url=' + Kotlin.toString(this.commits_url)) + (', created_at=' + Kotlin.toString(this.created_at)) + (', diff_url=' + Kotlin.toString(this.diff_url)) + (', draft=' + Kotlin.toString(this.draft)) + (', head=' + Kotlin.toString(this.head)) + (', html_url=' + Kotlin.toString(this.html_url)) + (', id=' + Kotlin.toString(this.id)) + (', issue_url=' + Kotlin.toString(this.issue_url)) + (', labels=' + Kotlin.toString(this.labels)) + (', locked=' + Kotlin.toString(this.locked)) + (', merge_commit_sha=' + Kotlin.toString(this.merge_commit_sha)) + (', merged_at=' + Kotlin.toString(this.merged_at)) + (', milestone=' + Kotlin.toString(this.milestone)) + (', node_id=' + Kotlin.toString(this.node_id)) + (', number=' + Kotlin.toString(this.number)) + (', patch_url=' + Kotlin.toString(this.patch_url)) + (', requested_reviewers=' + Kotlin.toString(this.requested_reviewers)) + (', requested_teams=' + Kotlin.toString(this.requested_teams)) + (', review_comment_url=' + Kotlin.toString(this.review_comment_url)) + (', review_comments_url=' + Kotlin.toString(this.review_comments_url)) + (', state=' + Kotlin.toString(this.state)) + (', statuses_url=' + Kotlin.toString(this.statuses_url)) + (', title=' + Kotlin.toString(this.title)) + (', updated_at=' + Kotlin.toString(this.updated_at)) + (', url=' + Kotlin.toString(this.url)) + (', user=' + Kotlin.toString(this.user)) + ')';
  };
  PullRequest.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._links) | 0;
    result = result * 31 + Kotlin.hashCode(this.active_lock_reason) | 0;
    result = result * 31 + Kotlin.hashCode(this.assignee) | 0;
    result = result * 31 + Kotlin.hashCode(this.assignees) | 0;
    result = result * 31 + Kotlin.hashCode(this.author_association) | 0;
    result = result * 31 + Kotlin.hashCode(this.auto_merge) | 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.closed_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.comments_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.commits_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.created_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.diff_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.draft) | 0;
    result = result * 31 + Kotlin.hashCode(this.head) | 0;
    result = result * 31 + Kotlin.hashCode(this.html_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.issue_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.labels) | 0;
    result = result * 31 + Kotlin.hashCode(this.locked) | 0;
    result = result * 31 + Kotlin.hashCode(this.merge_commit_sha) | 0;
    result = result * 31 + Kotlin.hashCode(this.merged_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.milestone) | 0;
    result = result * 31 + Kotlin.hashCode(this.node_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.patch_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.requested_reviewers) | 0;
    result = result * 31 + Kotlin.hashCode(this.requested_teams) | 0;
    result = result * 31 + Kotlin.hashCode(this.review_comment_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.review_comments_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.statuses_url) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.updated_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    return result;
  };
  PullRequest.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._links, other._links) && Kotlin.equals(this.active_lock_reason, other.active_lock_reason) && Kotlin.equals(this.assignee, other.assignee) && Kotlin.equals(this.assignees, other.assignees) && Kotlin.equals(this.author_association, other.author_association) && Kotlin.equals(this.auto_merge, other.auto_merge) && Kotlin.equals(this.base, other.base) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.closed_at, other.closed_at) && Kotlin.equals(this.comments_url, other.comments_url) && Kotlin.equals(this.commits_url, other.commits_url) && Kotlin.equals(this.created_at, other.created_at) && Kotlin.equals(this.diff_url, other.diff_url) && Kotlin.equals(this.draft, other.draft) && Kotlin.equals(this.head, other.head) && Kotlin.equals(this.html_url, other.html_url) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.issue_url, other.issue_url) && Kotlin.equals(this.labels, other.labels) && Kotlin.equals(this.locked, other.locked) && Kotlin.equals(this.merge_commit_sha, other.merge_commit_sha) && Kotlin.equals(this.merged_at, other.merged_at) && Kotlin.equals(this.milestone, other.milestone) && Kotlin.equals(this.node_id, other.node_id) && Kotlin.equals(this.number, other.number) && Kotlin.equals(this.patch_url, other.patch_url) && Kotlin.equals(this.requested_reviewers, other.requested_reviewers) && Kotlin.equals(this.requested_teams, other.requested_teams) && Kotlin.equals(this.review_comment_url, other.review_comment_url) && Kotlin.equals(this.review_comments_url, other.review_comments_url) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.statuses_url, other.statuses_url) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.updated_at, other.updated_at) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.user, other.user)))));
  };
  function Coroutine$main(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$inputs = void 0;
  }
  Coroutine$main.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main.prototype.constructor = Coroutine$main;
  Coroutine$main.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            setOutput('failed', false);
            this.local$inputs = resolveInputs();
            setOutput('owner', this.local$inputs.owner);
            setOutput('repo', this.local$inputs.repo);
            this.exceptionState_0 = 2;
            var releaseNoteBuilder = new ReleaseNoteBuilder(this.local$inputs);
            this.state_0 = 1;
            this.result_0 = releaseNoteBuilder.build(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var changelog = this.result_0;
            setOutput('changelog', changelog);
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var ex = this.exception_0;
            if (Kotlin.isType(ex, Exception)) {
              failOrError((tmp$ = ex.message) != null ? tmp$ : 'Error while generating changelog', this.local$inputs.failOnError);
            } else
              throw ex;
            this.state_0 = 3;
            continue;
          case 3:
            return;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main(continuation_0, suspended) {
    var instance = new Coroutine$main(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function resolveInputs() {
    var group$result;
    startGroup('Reading input values');
    try {
      var tempRepoString = split(ActionsEnvironment_getInstance().GITHUB_REPOSITORY, ['/']);
      var tmp$ = getInput('token');
      var $receiver = getInput('owner');
      var tmp$_0 = $receiver.length === 0 ? first(tempRepoString) : $receiver;
      var $receiver_0 = getInput('repo');
      group$result = new Inputs(tmp$, tmp$_0, $receiver_0.length === 0 ? tempRepoString.get_za3lpa$(1) : $receiver_0, getInput('path'), getInput('milestone'), getInput('configuration'), toBoolean(getInput('failOnError')));
    }finally {
      endGroup();
    }
    return group$result;
  }
  function Configuration(categories, empty_template, ignore_labels, pr_template, sort, transformers, template) {
    Configuration$Companion_getInstance();
    this.categories = categories;
    this.empty_template = empty_template;
    this.ignore_labels = ignore_labels;
    this.pr_template = pr_template;
    this.sort = sort;
    this.transformers = transformers;
    this.template = template;
  }
  function Configuration$Category(labels, title) {
    Configuration$Category$Companion_getInstance();
    this.labels = labels;
    this.title = title;
  }
  function Configuration$Category$Companion() {
    Configuration$Category$Companion_instance = this;
  }
  Configuration$Category$Companion.prototype.serializer = function () {
    return Configuration$Category$$serializer_getInstance();
  };
  Configuration$Category$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Configuration$Category$Companion_instance = null;
  function Configuration$Category$Companion_getInstance() {
    if (Configuration$Category$Companion_instance === null) {
      new Configuration$Category$Companion();
    }return Configuration$Category$Companion_instance;
  }
  function Configuration$Category$$serializer() {
    this.descriptor_bndl1b$_0 = new PluginGeneratedSerialDescriptor('models.Configuration.Category', this, 2);
    this.descriptor.addElement_ivxn3r$('labels', false);
    this.descriptor.addElement_ivxn3r$('title', false);
    Configuration$Category$$serializer_instance = this;
  }
  Object.defineProperty(Configuration$Category$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_bndl1b$_0;
    }
  });
  Configuration$Category$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeSerializableElement_r4qlx7$(this.descriptor, 0, new ArrayListSerializer(internal.StringSerializer), value.labels);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.title);
    output.endStructure_24f42q$(this.descriptor);
  };
  Configuration$Category$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeSerializableElement_12e8id$(this.descriptor, 0, new ArrayListSerializer(internal.StringSerializer), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Configuration$Configuration$Category_init(bitMask0, local0, local1, null);
  };
  Configuration$Category$$serializer.prototype.childSerializers = function () {
    return [new ArrayListSerializer(internal.StringSerializer), internal.StringSerializer];
  };
  Configuration$Category$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Configuration$Category$$serializer_instance = null;
  function Configuration$Category$$serializer_getInstance() {
    if (Configuration$Category$$serializer_instance === null) {
      new Configuration$Category$$serializer();
    }return Configuration$Category$$serializer_instance;
  }
  function Configuration$Configuration$Category_init(seen1, labels, title, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Configuration$Category.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('labels');
    else
      $this.labels = labels;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('title');
    else
      $this.title = title;
    return $this;
  }
  Configuration$Category.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Category',
    interfaces: []
  };
  Configuration$Category.prototype.component1 = function () {
    return this.labels;
  };
  Configuration$Category.prototype.component2 = function () {
    return this.title;
  };
  Configuration$Category.prototype.copy_8zkr97$ = function (labels, title) {
    return new Configuration$Category(labels === void 0 ? this.labels : labels, title === void 0 ? this.title : title);
  };
  Configuration$Category.prototype.toString = function () {
    return 'Category(labels=' + Kotlin.toString(this.labels) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  Configuration$Category.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.labels) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Configuration$Category.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.labels, other.labels) && Kotlin.equals(this.title, other.title)))));
  };
  function Configuration$Transformer(pattern, target) {
    Configuration$Transformer$Companion_getInstance();
    this.pattern = pattern;
    this.target = target;
  }
  function Configuration$Transformer$Companion() {
    Configuration$Transformer$Companion_instance = this;
  }
  Configuration$Transformer$Companion.prototype.serializer = function () {
    return Configuration$Transformer$$serializer_getInstance();
  };
  Configuration$Transformer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Configuration$Transformer$Companion_instance = null;
  function Configuration$Transformer$Companion_getInstance() {
    if (Configuration$Transformer$Companion_instance === null) {
      new Configuration$Transformer$Companion();
    }return Configuration$Transformer$Companion_instance;
  }
  function Configuration$Transformer$$serializer() {
    this.descriptor_cw19sy$_0 = new PluginGeneratedSerialDescriptor('models.Configuration.Transformer', this, 2);
    this.descriptor.addElement_ivxn3r$('pattern', false);
    this.descriptor.addElement_ivxn3r$('target', false);
    Configuration$Transformer$$serializer_instance = this;
  }
  Object.defineProperty(Configuration$Transformer$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_cw19sy$_0;
    }
  });
  Configuration$Transformer$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.pattern);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.target);
    output.endStructure_24f42q$(this.descriptor);
  };
  Configuration$Transformer$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Configuration$Configuration$Transformer_init(bitMask0, local0, local1, null);
  };
  Configuration$Transformer$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  Configuration$Transformer$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Configuration$Transformer$$serializer_instance = null;
  function Configuration$Transformer$$serializer_getInstance() {
    if (Configuration$Transformer$$serializer_instance === null) {
      new Configuration$Transformer$$serializer();
    }return Configuration$Transformer$$serializer_instance;
  }
  function Configuration$Configuration$Transformer_init(seen1, pattern, target, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Configuration$Transformer.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('pattern');
    else
      $this.pattern = pattern;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('target');
    else
      $this.target = target;
    return $this;
  }
  Configuration$Transformer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transformer',
    interfaces: []
  };
  Configuration$Transformer.prototype.component1 = function () {
    return this.pattern;
  };
  Configuration$Transformer.prototype.component2 = function () {
    return this.target;
  };
  Configuration$Transformer.prototype.copy_puj7f4$ = function (pattern, target) {
    return new Configuration$Transformer(pattern === void 0 ? this.pattern : pattern, target === void 0 ? this.target : target);
  };
  Configuration$Transformer.prototype.toString = function () {
    return 'Transformer(pattern=' + Kotlin.toString(this.pattern) + (', target=' + Kotlin.toString(this.target)) + ')';
  };
  Configuration$Transformer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pattern) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    return result;
  };
  Configuration$Transformer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pattern, other.pattern) && Kotlin.equals(this.target, other.target)))));
  };
  function Configuration$Companion() {
    Configuration$Companion_instance = this;
    this.DEFAULT_CONFIG = new Configuration(listOf_0([new Configuration$Category(listOf('feature'), '## \uD83D\uDE80 Features'), new Configuration$Category(listOf('fix'), '## \uD83D\uDC1B Fixes'), new Configuration$Category(listOf('test'), '## \uD83E\uDDEA Tests')]), '- no changes', listOf('ignore'), '- ${{TITLE}}    - PR: #${{NUMBER}}', 'DESC', emptyList(), '${{CHANGELOG}}<details><summary>Uncategorized<\/summary>${{UNCATEGORIZED}}<\/details>');
  }
  Configuration$Companion.prototype.serializer = function () {
    return Configuration$$serializer_getInstance();
  };
  Configuration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Configuration$Companion_instance = null;
  function Configuration$Companion_getInstance() {
    if (Configuration$Companion_instance === null) {
      new Configuration$Companion();
    }return Configuration$Companion_instance;
  }
  function Configuration$$serializer() {
    this.descriptor_n2dknr$_0 = new PluginGeneratedSerialDescriptor('models.Configuration', this, 7);
    this.descriptor.addElement_ivxn3r$('categories', false);
    this.descriptor.addElement_ivxn3r$('empty_template', false);
    this.descriptor.addElement_ivxn3r$('ignore_labels', false);
    this.descriptor.addElement_ivxn3r$('pr_template', false);
    this.descriptor.addElement_ivxn3r$('sort', false);
    this.descriptor.addElement_ivxn3r$('transformers', false);
    this.descriptor.addElement_ivxn3r$('template', false);
    Configuration$$serializer_instance = this;
  }
  Object.defineProperty(Configuration$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_n2dknr$_0;
    }
  });
  Configuration$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 0, new ArrayListSerializer(Configuration$Category$$serializer_getInstance()), value.categories);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 1, internal.StringSerializer, value.empty_template);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 2, new ArrayListSerializer(internal.StringSerializer), value.ignore_labels);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 3, internal.StringSerializer, value.pr_template);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 4, internal.StringSerializer, value.sort);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 5, new ArrayListSerializer(Configuration$Transformer$$serializer_getInstance()), value.transformers);
    output.encodeNullableSerializableElement_qw92s8$(this.descriptor, 6, internal.StringSerializer, value.template);
    output.endStructure_24f42q$(this.descriptor);
  };
  Configuration$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3
    , local4
    , local5
    , local6;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 0, new ArrayListSerializer(Configuration$Category$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 1, internal.StringSerializer, local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 2, new ArrayListSerializer(internal.StringSerializer), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 3, internal.StringSerializer, local3);
          bitMask0 |= 8;
          break;
        case 4:
          local4 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 4, internal.StringSerializer, local4);
          bitMask0 |= 16;
          break;
        case 5:
          local5 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 5, new ArrayListSerializer(Configuration$Transformer$$serializer_getInstance()), local5);
          bitMask0 |= 32;
          break;
        case 6:
          local6 = input.decodeNullableSerializableElement_8viuyw$(this.descriptor, 6, internal.StringSerializer, local6);
          bitMask0 |= 64;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Configuration_init(bitMask0, local0, local1, local2, local3, local4, local5, local6, null);
  };
  Configuration$$serializer.prototype.childSerializers = function () {
    return [new NullableSerializer(new ArrayListSerializer(Configuration$Category$$serializer_getInstance())), new NullableSerializer(internal.StringSerializer), new NullableSerializer(new ArrayListSerializer(internal.StringSerializer)), new NullableSerializer(internal.StringSerializer), new NullableSerializer(internal.StringSerializer), new NullableSerializer(new ArrayListSerializer(Configuration$Transformer$$serializer_getInstance())), new NullableSerializer(internal.StringSerializer)];
  };
  Configuration$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Configuration$$serializer_instance = null;
  function Configuration$$serializer_getInstance() {
    if (Configuration$$serializer_instance === null) {
      new Configuration$$serializer();
    }return Configuration$$serializer_instance;
  }
  function Configuration_init(seen1, categories, empty_template, ignore_labels, pr_template, sort, transformers, template, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Configuration.prototype);
    if ((seen1 & 1) === 0)
      throw MissingFieldException_init('categories');
    else
      $this.categories = categories;
    if ((seen1 & 2) === 0)
      throw MissingFieldException_init('empty_template');
    else
      $this.empty_template = empty_template;
    if ((seen1 & 4) === 0)
      throw MissingFieldException_init('ignore_labels');
    else
      $this.ignore_labels = ignore_labels;
    if ((seen1 & 8) === 0)
      throw MissingFieldException_init('pr_template');
    else
      $this.pr_template = pr_template;
    if ((seen1 & 16) === 0)
      throw MissingFieldException_init('sort');
    else
      $this.sort = sort;
    if ((seen1 & 32) === 0)
      throw MissingFieldException_init('transformers');
    else
      $this.transformers = transformers;
    if ((seen1 & 64) === 0)
      throw MissingFieldException_init('template');
    else
      $this.template = template;
    return $this;
  }
  Configuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Configuration',
    interfaces: []
  };
  Configuration.prototype.component1 = function () {
    return this.categories;
  };
  Configuration.prototype.component2 = function () {
    return this.empty_template;
  };
  Configuration.prototype.component3 = function () {
    return this.ignore_labels;
  };
  Configuration.prototype.component4 = function () {
    return this.pr_template;
  };
  Configuration.prototype.component5 = function () {
    return this.sort;
  };
  Configuration.prototype.component6 = function () {
    return this.transformers;
  };
  Configuration.prototype.component7 = function () {
    return this.template;
  };
  Configuration.prototype.copy_dep1fv$ = function (categories, empty_template, ignore_labels, pr_template, sort, transformers, template) {
    return new Configuration(categories === void 0 ? this.categories : categories, empty_template === void 0 ? this.empty_template : empty_template, ignore_labels === void 0 ? this.ignore_labels : ignore_labels, pr_template === void 0 ? this.pr_template : pr_template, sort === void 0 ? this.sort : sort, transformers === void 0 ? this.transformers : transformers, template === void 0 ? this.template : template);
  };
  Configuration.prototype.toString = function () {
    return 'Configuration(categories=' + Kotlin.toString(this.categories) + (', empty_template=' + Kotlin.toString(this.empty_template)) + (', ignore_labels=' + Kotlin.toString(this.ignore_labels)) + (', pr_template=' + Kotlin.toString(this.pr_template)) + (', sort=' + Kotlin.toString(this.sort)) + (', transformers=' + Kotlin.toString(this.transformers)) + (', template=' + Kotlin.toString(this.template)) + ')';
  };
  Configuration.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.empty_template) | 0;
    result = result * 31 + Kotlin.hashCode(this.ignore_labels) | 0;
    result = result * 31 + Kotlin.hashCode(this.pr_template) | 0;
    result = result * 31 + Kotlin.hashCode(this.sort) | 0;
    result = result * 31 + Kotlin.hashCode(this.transformers) | 0;
    result = result * 31 + Kotlin.hashCode(this.template) | 0;
    return result;
  };
  Configuration.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.empty_template, other.empty_template) && Kotlin.equals(this.ignore_labels, other.ignore_labels) && Kotlin.equals(this.pr_template, other.pr_template) && Kotlin.equals(this.sort, other.sort) && Kotlin.equals(this.transformers, other.transformers) && Kotlin.equals(this.template, other.template)))));
  };
  function Inputs(token, owner, repo, providedPath, milestone, configPath, failOnError) {
    this.token = token;
    this.owner = owner;
    this.repo = repo;
    this.providedPath = providedPath;
    this.milestone = milestone;
    this.configPath = configPath;
    this.failOnError = failOnError;
  }
  Inputs.prototype.resolveConfiguration = function () {
    var tmp$;
    var configuration = Configuration$Companion_getInstance().DEFAULT_CONFIG;
    if (this.configPath.length === 0) {
      return configuration;
    }var repoPath = repositoryPath(this.providedPath);
    var resolvedConfigPath = $module$path.resolve(repoPath, this.configPath);
    debug('config path = ' + resolvedConfigPath);
    configuration = (tmp$ = this.readJsonFile_0(resolvedConfigPath)) != null ? tmp$ : Configuration$Companion_getInstance().DEFAULT_CONFIG;
    return configuration;
  };
  Inputs.prototype.readJsonFile_0 = function (filename) {
    var tmp$;
    var rawData;
    try {
      rawData = readFileSync(filename, 'utf8');
    } catch (error) {
      if (Kotlin.isType(error, Exception)) {
        info("\u26A0\uFE0F Configuration provided, but it couldn't be found. Fallback to Defaults.");
        return null;
      } else
        throw error;
    }
    try {
      tmp$ = JSON.parse(rawData);
    } catch (error) {
      if (Kotlin.isType(error, Exception)) {
        info("\u26A0\uFE0F Configuration provided, but it couldn't be parsed. Fallback to Defaults.");
        tmp$ = null;
      } else
        throw error;
    }
    return tmp$;
  };
  Inputs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inputs',
    interfaces: []
  };
  Inputs.prototype.component1 = function () {
    return this.token;
  };
  Inputs.prototype.component2 = function () {
    return this.owner;
  };
  Inputs.prototype.component3 = function () {
    return this.repo;
  };
  Inputs.prototype.component4 = function () {
    return this.providedPath;
  };
  Inputs.prototype.component5 = function () {
    return this.milestone;
  };
  Inputs.prototype.component6 = function () {
    return this.configPath;
  };
  Inputs.prototype.component7 = function () {
    return this.failOnError;
  };
  Inputs.prototype.copy_icol24$ = function (token, owner, repo, providedPath, milestone, configPath, failOnError) {
    return new Inputs(token === void 0 ? this.token : token, owner === void 0 ? this.owner : owner, repo === void 0 ? this.repo : repo, providedPath === void 0 ? this.providedPath : providedPath, milestone === void 0 ? this.milestone : milestone, configPath === void 0 ? this.configPath : configPath, failOnError === void 0 ? this.failOnError : failOnError);
  };
  Inputs.prototype.toString = function () {
    return 'Inputs(token=' + Kotlin.toString(this.token) + (', owner=' + Kotlin.toString(this.owner)) + (', repo=' + Kotlin.toString(this.repo)) + (', providedPath=' + Kotlin.toString(this.providedPath)) + (', milestone=' + Kotlin.toString(this.milestone)) + (', configPath=' + Kotlin.toString(this.configPath)) + (', failOnError=' + Kotlin.toString(this.failOnError)) + ')';
  };
  Inputs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.repo) | 0;
    result = result * 31 + Kotlin.hashCode(this.providedPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.milestone) | 0;
    result = result * 31 + Kotlin.hashCode(this.configPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.failOnError) | 0;
    return result;
  };
  Inputs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.token, other.token) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.repo, other.repo) && Kotlin.equals(this.providedPath, other.providedPath) && Kotlin.equals(this.milestone, other.milestone) && Kotlin.equals(this.configPath, other.configPath) && Kotlin.equals(this.failOnError, other.failOnError)))));
  };
  function MilestoneInfo(number, title, created_at, updated_at, closedPRs, closedAt) {
    this.number = number;
    this.title = title;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.closedPRs = closedPRs;
    this.closedAt = closedAt;
  }
  MilestoneInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MilestoneInfo',
    interfaces: []
  };
  MilestoneInfo.prototype.component1 = function () {
    return this.number;
  };
  MilestoneInfo.prototype.component2 = function () {
    return this.title;
  };
  MilestoneInfo.prototype.component3 = function () {
    return this.created_at;
  };
  MilestoneInfo.prototype.component4 = function () {
    return this.updated_at;
  };
  MilestoneInfo.prototype.component5 = function () {
    return this.closedPRs;
  };
  MilestoneInfo.prototype.component6 = function () {
    return this.closedAt;
  };
  MilestoneInfo.prototype.copy_fhs56f$ = function (number, title, created_at, updated_at, closedPRs, closedAt) {
    return new MilestoneInfo(number === void 0 ? this.number : number, title === void 0 ? this.title : title, created_at === void 0 ? this.created_at : created_at, updated_at === void 0 ? this.updated_at : updated_at, closedPRs === void 0 ? this.closedPRs : closedPRs, closedAt === void 0 ? this.closedAt : closedAt);
  };
  MilestoneInfo.prototype.toString = function () {
    return 'MilestoneInfo(number=' + Kotlin.toString(this.number) + (', title=' + Kotlin.toString(this.title)) + (', created_at=' + Kotlin.toString(this.created_at)) + (', updated_at=' + Kotlin.toString(this.updated_at)) + (', closedPRs=' + Kotlin.toString(this.closedPRs)) + (', closedAt=' + Kotlin.toString(this.closedAt)) + ')';
  };
  MilestoneInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.created_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.updated_at) | 0;
    result = result * 31 + Kotlin.hashCode(this.closedPRs) | 0;
    result = result * 31 + Kotlin.hashCode(this.closedAt) | 0;
    return result;
  };
  MilestoneInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.number, other.number) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.created_at, other.created_at) && Kotlin.equals(this.updated_at, other.updated_at) && Kotlin.equals(this.closedPRs, other.closedPRs) && Kotlin.equals(this.closedAt, other.closedAt)))));
  };
  function PullRequestInfo(number, title, htmlURL, mergedAt, mergeCommitSha, author, labels, body, assignees, requestedReviewers) {
    this.number = number;
    this.title = title;
    this.htmlURL = htmlURL;
    this.mergedAt = mergedAt;
    this.mergeCommitSha = mergeCommitSha;
    this.author = author;
    this.labels = labels;
    this.body = body;
    this.assignees = assignees;
    this.requestedReviewers = requestedReviewers;
  }
  PullRequestInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PullRequestInfo',
    interfaces: []
  };
  PullRequestInfo.prototype.component1 = function () {
    return this.number;
  };
  PullRequestInfo.prototype.component2 = function () {
    return this.title;
  };
  PullRequestInfo.prototype.component3 = function () {
    return this.htmlURL;
  };
  PullRequestInfo.prototype.component4 = function () {
    return this.mergedAt;
  };
  PullRequestInfo.prototype.component5 = function () {
    return this.mergeCommitSha;
  };
  PullRequestInfo.prototype.component6 = function () {
    return this.author;
  };
  PullRequestInfo.prototype.component7 = function () {
    return this.labels;
  };
  PullRequestInfo.prototype.component8 = function () {
    return this.body;
  };
  PullRequestInfo.prototype.component9 = function () {
    return this.assignees;
  };
  PullRequestInfo.prototype.component10 = function () {
    return this.requestedReviewers;
  };
  PullRequestInfo.prototype.copy_bffzk5$ = function (number, title, htmlURL, mergedAt, mergeCommitSha, author, labels, body, assignees, requestedReviewers) {
    return new PullRequestInfo(number === void 0 ? this.number : number, title === void 0 ? this.title : title, htmlURL === void 0 ? this.htmlURL : htmlURL, mergedAt === void 0 ? this.mergedAt : mergedAt, mergeCommitSha === void 0 ? this.mergeCommitSha : mergeCommitSha, author === void 0 ? this.author : author, labels === void 0 ? this.labels : labels, body === void 0 ? this.body : body, assignees === void 0 ? this.assignees : assignees, requestedReviewers === void 0 ? this.requestedReviewers : requestedReviewers);
  };
  PullRequestInfo.prototype.toString = function () {
    return 'PullRequestInfo(number=' + Kotlin.toString(this.number) + (', title=' + Kotlin.toString(this.title)) + (', htmlURL=' + Kotlin.toString(this.htmlURL)) + (', mergedAt=' + Kotlin.toString(this.mergedAt)) + (', mergeCommitSha=' + Kotlin.toString(this.mergeCommitSha)) + (', author=' + Kotlin.toString(this.author)) + (', labels=' + Kotlin.toString(this.labels)) + (', body=' + Kotlin.toString(this.body)) + (', assignees=' + Kotlin.toString(this.assignees)) + (', requestedReviewers=' + Kotlin.toString(this.requestedReviewers)) + ')';
  };
  PullRequestInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.htmlURL) | 0;
    result = result * 31 + Kotlin.hashCode(this.mergedAt) | 0;
    result = result * 31 + Kotlin.hashCode(this.mergeCommitSha) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.labels) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.assignees) | 0;
    result = result * 31 + Kotlin.hashCode(this.requestedReviewers) | 0;
    return result;
  };
  PullRequestInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.number, other.number) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.htmlURL, other.htmlURL) && Kotlin.equals(this.mergedAt, other.mergedAt) && Kotlin.equals(this.mergeCommitSha, other.mergeCommitSha) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.labels, other.labels) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.assignees, other.assignees) && Kotlin.equals(this.requestedReviewers, other.requestedReviewers)))));
  };
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function BuildChangelog(inputs) {
    this.inputs_0 = inputs;
  }
  function BuildChangelog$invoke$lambda$lambda(it) {
    return it.mergedAt;
  }
  function BuildChangelog$invoke$lambda$lambda_0(it) {
    return it.mergedAt;
  }
  function Coroutine$BuildChangelog$invoke$lambda(this$BuildChangelog_0, closure$prs_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$BuildChangelog = this$BuildChangelog_0;
    this.local$closure$prs = closure$prs_0;
  }
  Coroutine$BuildChangelog$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildChangelog$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildChangelog$invoke$lambda.prototype.constructor = Coroutine$BuildChangelog$invoke$lambda;
  Coroutine$BuildChangelog$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
            var config = this.local$this$BuildChangelog.inputs_0.resolveConfiguration();
            var sort = (tmp$_0 = (tmp$ = config.sort) != null ? tmp$.length === 0 ? Configuration$Companion_getInstance().DEFAULT_CONFIG.sort : tmp$ : null) != null ? tmp$_0 : Configuration$Companion_getInstance().DEFAULT_CONFIG.sort;
            var sortAsc = equals(sort != null ? sort.toUpperCase() : null, 'ASC');
            if (sortAsc) {
              sortedWith(this.local$closure$prs, new Comparator(compareBy$lambda(BuildChangelog$invoke$lambda$lambda)));
            } else {
              sortedWith(this.local$closure$prs, new Comparator(compareByDescending$lambda(BuildChangelog$invoke$lambda$lambda_0)));
            }

            info('\u2139\uFE0F Sorted all pull requests ascending: ' + toString(sort));
            var transformedMap = LinkedHashMap_init();
            var tmp$_8;
            tmp$_8 = this.local$closure$prs.iterator();
            while (tmp$_8.hasNext()) {
              var element = tmp$_8.next();
              var tmp$_9;
              var value = this.local$this$BuildChangelog.fillTemplate_0(element, (tmp$_9 = config.pr_template) != null ? tmp$_9 : ensureNotNull(Configuration$Companion_getInstance().DEFAULT_CONFIG.pr_template));
              transformedMap.put_xwzc9p$(element, value);
            }

            info('Wrote messages for ' + this.local$closure$prs.size + ' pull requests');
            var categorized = LinkedHashMap_init();
            var categories = (tmp$_1 = config.categories) != null ? tmp$_1 : ensureNotNull(Configuration$Companion_getInstance().DEFAULT_CONFIG.categories);
            var ignoredLabels = (tmp$_2 = config.ignore_labels) != null ? tmp$_2 : ensureNotNull(Configuration$Companion_getInstance().DEFAULT_CONFIG.ignore_labels);
            var tmp$_10;
            tmp$_10 = categories.iterator();
            while (tmp$_10.hasNext()) {
              var element_0 = tmp$_10.next();
              var value_0 = ArrayList_init();
              categorized.put_xwzc9p$(element_0, value_0);
            }

            var categorizedPrs = ArrayList_init();
            var ignoredPrs = ArrayList_init();
            var uncategorizedPrs = ArrayList_init();
            var tmp$_11;
            tmp$_11 = transformedMap.entries.iterator();
            while (tmp$_11.hasNext()) {
              var element_1 = tmp$_11.next();
              var this$BuildChangelog = this.local$this$BuildChangelog;
              var tmp$_12;
              var pr = element_1.key;
              var body = element_1.value;
              if (this$BuildChangelog.haveCommonElements_0(ignoredLabels, pr.labels)) {
                ignoredPrs.add_11rb$(body);
              }var matched = {v: false};
              var tmp$_13;
              tmp$_13 = categorized.entries.iterator();
              while (tmp$_13.hasNext()) {
                var element_2 = tmp$_13.next();
                if (this$BuildChangelog.haveCommonElements_0(element_2.key.labels, pr.labels)) {
                  element_2.value.add_11rb$(body);
                  matched.v = true;
                }}
              if (!matched.v) {
                tmp$_12 = categorized.entries.iterator();
                while (tmp$_12.hasNext()) {
                  var categorizedEntry = tmp$_12.next();
                  if (categorizedEntry.key.labels.isEmpty()) {
                    categorizedEntry.value.add_11rb$(body);
                    break;
                  }}
                uncategorizedPrs.add_11rb$(body);
              } else {
                categorizedPrs.add_11rb$(body);
              }
            }

            info('\u2139\uFE0F Ordered all pull requests into ' + categories.size + ' categories');
            var changelog = '';
            tmp$_3 = categorized.entries.iterator();
            while (tmp$_3.hasNext()) {
              var categorizedEntry_0 = tmp$_3.next();
              var pullRequests = categorizedEntry_0.value;
              var category = categorizedEntry_0.key;
              if (pullRequests.size > 0) {
                changelog = changelog + category.title + '\n' + '\n';
                tmp$_4 = pullRequests.iterator();
                while (tmp$_4.hasNext()) {
                  var pr_0 = tmp$_4.next();
                  changelog = changelog + pr_0 + '\n';
                }
                changelog = changelog + '\n';
              }}

            info('Wrote ' + categorizedPrs.size + ' categorized pull requests down');
            var changelogUncategorized = '';
            tmp$_5 = uncategorizedPrs.iterator();
            while (tmp$_5.hasNext()) {
              var pr_1 = tmp$_5.next();
              changelogUncategorized = changelogUncategorized + pr_1 + '\n';
            }

            info('Wrote ' + uncategorizedPrs.size + ' non categorized pull requests down');
            var changelogIgnored = '';
            tmp$_6 = ignoredPrs.iterator();
            while (tmp$_6.hasNext()) {
              var pr_2 = tmp$_6.next();
              changelogIgnored = changelogIgnored + pr_2 + '\n';
            }

            info('Wrote ' + ignoredPrs.size + ' ignored pull requests down');
            var transformedChangelog = (tmp$_7 = config.template) != null ? tmp$_7 : ensureNotNull(Configuration$Companion_getInstance().DEFAULT_CONFIG.template);
            transformedChangelog = replace(transformedChangelog, '${{CHANGELOG}}', changelog);
            transformedChangelog = replace(transformedChangelog, '${{UNCATEGORIZED}}', changelogUncategorized);
            transformedChangelog = replace(transformedChangelog, '${{IGNORED}}', changelogIgnored);
            transformedChangelog = replace(transformedChangelog, '${{CATEGORIZED_COUNT}}', categorizedPrs.size.toString());
            transformedChangelog = replace(transformedChangelog, '${{UNCATEGORIZED_COUNT}}', uncategorizedPrs.size.toString());
            transformedChangelog = replace(transformedChangelog, '${{IGNORED_COUNT}}', ignoredPrs.size.toString());
            info('\u2139\uFE0F Filled template');
            return transformedChangelog;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildChangelog$invoke$lambda(this$BuildChangelog_0, closure$prs_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildChangelog$invoke$lambda(this$BuildChangelog_0, closure$prs_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuildChangelog.prototype.invoke_nh2p3d$ = function (prs, continuation) {
    return supervisorScope(BuildChangelog$invoke$lambda(this, prs), continuation);
  };
  BuildChangelog.prototype.haveCommonElements_0 = function (arr1, arr2) {
    if (arr1 != null) {
      var tmp$;
      tmp$ = arr1.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        return (tmp$_0 = arr2 != null ? arr2.contains_11rb$(element) : null) != null ? tmp$_0 : false;
      }
    }return false;
  };
  BuildChangelog.prototype.fillTemplate_0 = function (pr, template) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (isBlank(template))
      return '';
    var transformed = template;
    transformed = replace(transformed, '${{NUMBER}}', pr.number.toString());
    transformed = replace(transformed, '${{TITLE}}', pr.title);
    transformed = replace(transformed, '${{URL}}', pr.htmlURL);
    transformed = replace(transformed, '${{MERGED_AT}}', pr.mergedAt.toString());
    transformed = replace(transformed, '${{AUTHOR}}', pr.author);
    transformed = replace(transformed, '${{LABELS}}', (tmp$_0 = (tmp$ = pr.labels) != null ? joinToString(tmp$) : null) != null ? tmp$_0 : '');
    transformed = replace(transformed, '${{BODY}}', pr.body);
    transformed = replace(transformed, '${{ASSIGNEES}}', (tmp$_2 = (tmp$_1 = pr.assignees) != null ? joinToString(tmp$_1) : null) != null ? tmp$_2 : '');
    transformed = replace(transformed, '${{REVIEWERS}}', (tmp$_4 = (tmp$_3 = pr.requestedReviewers) != null ? joinToString(tmp$_3) : null) != null ? tmp$_4 : '');
    return transformed;
  };
  BuildChangelog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildChangelog',
    interfaces: []
  };
  var compareByDescending$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function FetchLastClosedMilestone(githubClient) {
    this.githubClient_0 = githubClient;
  }
  function FetchLastClosedMilestone$invoke$lambda$lambda(it) {
    return it.updated_at.epochSeconds;
  }
  function Coroutine$FetchLastClosedMilestone$invoke$lambda(this$FetchLastClosedMilestone_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FetchLastClosedMilestone = this$FetchLastClosedMilestone_0;
    this.local$page = void 0;
    this.local$moreMilestoneExist = void 0;
    this.local$mergedMilestoneList = void 0;
  }
  Coroutine$FetchLastClosedMilestone$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FetchLastClosedMilestone$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FetchLastClosedMilestone$invoke$lambda.prototype.constructor = Coroutine$FetchLastClosedMilestone$invoke$lambda;
  Coroutine$FetchLastClosedMilestone$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$page = 1;
            this.local$moreMilestoneExist = true;
            this.local$mergedMilestoneList = ArrayList_init();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$moreMilestoneExist) {
              this.state_0 = 4;
              continue;
            }
            this.state_0 = 3;
            this.result_0 = this.local$this$FetchLastClosedMilestone.githubClient_0.milestones_3hfkgy$(new MilestoneRequest('closed', void 0, void 0, void 0, this.local$page), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var milestoneResponse = this.result_0;
            var tmp$;
            tmp$ = milestoneResponse.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              this.local$mergedMilestoneList.add_11rb$(new MilestoneInfo(element.number, element.title, toInstant(element.created_at), toInstant(element.updated_at), element.closed_issues, toInstant(element.closed_at)));
            }

            if (milestoneResponse.size < 50) {
              this.local$moreMilestoneExist = false;
            } else {
              this.local$page = this.local$page + 1 | 0;
            }

            this.state_0 = 2;
            continue;
          case 4:
            if (this.local$mergedMilestoneList.isEmpty()) {
              throw IllegalStateException_init('No closed milestones found');
            }
            if (this.local$mergedMilestoneList.size > 1) {
              sortWith(this.local$mergedMilestoneList, new Comparator(compareByDescending$lambda_0(FetchLastClosedMilestone$invoke$lambda$lambda)));
            }
            var firstMilestone = first(this.local$mergedMilestoneList);
            var now = Clock.System.now();
            var systemTZ = TimeZone.Companion.currentSystemDefault();
            if (firstMilestone.closedAt.compareTo_11rb$(plus(now, -1, DateTimeUnit.Companion.DAY, systemTZ)) < 0) {
              throw IllegalStateException_init('No milestone closed in last 24 hours');
            }
            return firstMilestone;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function FetchLastClosedMilestone$invoke$lambda(this$FetchLastClosedMilestone_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FetchLastClosedMilestone$invoke$lambda(this$FetchLastClosedMilestone_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  FetchLastClosedMilestone.prototype.invoke = function (continuation) {
    return supervisorScope(FetchLastClosedMilestone$invoke$lambda(this), continuation);
  };
  FetchLastClosedMilestone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FetchLastClosedMilestone',
    interfaces: []
  };
  function FetchMilestoneByName(githubClient) {
    this.githubClient_0 = githubClient;
  }
  function Coroutine$FetchMilestoneByName$invoke$lambda(this$FetchMilestoneByName_0, closure$name_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FetchMilestoneByName = this$FetchMilestoneByName_0;
    this.local$closure$name = closure$name_0;
    this.local$page = void 0;
    this.local$moreMilestoneExist = void 0;
    this.local$milestoneResponse = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$FetchMilestoneByName$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FetchMilestoneByName$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FetchMilestoneByName$invoke$lambda.prototype.constructor = Coroutine$FetchMilestoneByName$invoke$lambda;
  Coroutine$FetchMilestoneByName$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$page = 1;
            this.local$moreMilestoneExist = true;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$moreMilestoneExist) {
              this.state_0 = 7;
              continue;
            }
            this.state_0 = 3;
            this.result_0 = this.local$this$FetchMilestoneByName.githubClient_0.milestones_3hfkgy$(new MilestoneRequest('all', void 0, void 0, void 0, this.local$page), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$milestoneResponse = this.result_0;
            this.local$tmp$ = this.local$milestoneResponse.iterator();
            this.state_0 = 4;
            continue;
          case 4:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var element = this.local$tmp$.next();
            if (equals(element.title, this.local$closure$name)) {
              return new MilestoneInfo(element.number, element.title, toInstant(element.created_at), toInstant(element.updated_at), element.closed_issues, toInstant(element.closed_at));
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 4;
            continue;
          case 6:
            if (this.local$milestoneResponse.size < 50) {
              this.local$moreMilestoneExist = false;
            } else {
              this.local$page = this.local$page + 1 | 0;
            }

            this.state_0 = 2;
            continue;
          case 7:
            throw IllegalStateException_init('No milestone found with name - ' + this.local$closure$name);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function FetchMilestoneByName$invoke$lambda(this$FetchMilestoneByName_0, closure$name_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FetchMilestoneByName$invoke$lambda(this$FetchMilestoneByName_0, closure$name_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  FetchMilestoneByName.prototype.invoke_61zpoe$ = function (name, continuation) {
    return supervisorScope(FetchMilestoneByName$invoke$lambda(this, name), continuation);
  };
  FetchMilestoneByName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FetchMilestoneByName',
    interfaces: []
  };
  var compareByDescending$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function GetPRsForMilestone(githubClient) {
    this.githubClient_0 = githubClient;
  }
  function GetPRsForMilestone$invoke$lambda$lambda$lambda(it) {
    return it.mergedAt.epochSeconds;
  }
  function GetPRsForMilestone$invoke$lambda$lambda(it) {
    return it.mergedAt.epochSeconds;
  }
  function Coroutine$GetPRsForMilestone$invoke$lambda(this$GetPRsForMilestone_0, closure$milestone_0, closure$milestoneClosedAt_0, closure$closedPRs_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$GetPRsForMilestone = this$GetPRsForMilestone_0;
    this.local$closure$milestone = closure$milestone_0;
    this.local$closure$milestoneClosedAt = closure$milestoneClosedAt_0;
    this.local$closure$closedPRs = closure$closedPRs_0;
    this.local$page = void 0;
    this.local$mergedPRList = void 0;
    this.local$morePRsExist = void 0;
    this.local$pullRequests = void 0;
    this.local$tmp$ = void 0;
  }
  Coroutine$GetPRsForMilestone$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GetPRsForMilestone$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GetPRsForMilestone$invoke$lambda.prototype.constructor = Coroutine$GetPRsForMilestone$invoke$lambda;
  Coroutine$GetPRsForMilestone$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$page = 1;
            this.local$mergedPRList = ArrayList_init();
            this.local$morePRsExist = true;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$morePRsExist) {
              this.state_0 = 7;
              continue;
            }
            this.state_0 = 3;
            this.result_0 = this.local$this$GetPRsForMilestone.githubClient_0.pullRequests_3hfkgy$(new MilestoneRequest('closed', 'desc', 'updated', void 0, this.local$page), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$pullRequests = this.result_0;
            var destination = ArrayList_init();
            var tmp$;
            tmp$ = this.local$pullRequests.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var closure$milestone = this.local$closure$milestone;
              var closure$milestoneClosedAt = this.local$closure$milestoneClosedAt;
              var tmp$_0;
              if (((tmp$_0 = element.milestone) != null ? tmp$_0.number : null) === closure$milestone && toInstant(element.closed_at).compareTo_11rb$(closure$milestoneClosedAt) < 0)
                destination.add_11rb$(element);
            }

            this.local$tmp$ = destination.iterator();
            this.state_0 = 4;
            continue;
          case 4:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }
            var element_0 = this.local$tmp$.next();
            var closure$closedPRs = this.local$closure$closedPRs;
            var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
            tmp$_1 = element_0.number;
            tmp$_2 = element_0.title;
            tmp$_3 = element_0.html_url;
            tmp$_4 = toInstant(element_0.closed_at);
            tmp$_5 = element_0.merge_commit_sha;
            tmp$_8 = (tmp$_7 = (tmp$_6 = element_0.user) != null ? tmp$_6.login : null) != null ? tmp$_7 : '';
            var tmp$_14;
            if ((tmp$_9 = element_0.labels) != null) {
              var destination_0 = ArrayList_init_0(collectionSizeOrDefault(tmp$_9, 10));
              var tmp$_15;
              tmp$_15 = tmp$_9.iterator();
              while (tmp$_15.hasNext()) {
                var item = tmp$_15.next();
                destination_0.add_11rb$(item.name);
              }
              tmp$_14 = destination_0;
            } else
              tmp$_14 = null;
            tmp$_10 = tmp$_14;
            tmp$_11 = element_0.body;
            var tmp$_16;
            if ((tmp$_12 = element_0.assignees) != null) {
              var destination_1 = ArrayList_init_0(collectionSizeOrDefault(tmp$_12, 10));
              var tmp$_17;
              tmp$_17 = tmp$_12.iterator();
              while (tmp$_17.hasNext()) {
                var item_0 = tmp$_17.next();
                destination_1.add_11rb$(item_0.login);
              }
              tmp$_16 = destination_1;
            } else
              tmp$_16 = null;
            tmp$_13 = tmp$_16;
            var $receiver = element_0.requested_reviewers;
            var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
            var tmp$_18;
            tmp$_18 = $receiver.iterator();
            while (tmp$_18.hasNext()) {
              var item_1 = tmp$_18.next();
              destination_2.add_11rb$(item_1.login);
            }

            this.local$mergedPRList.add_11rb$(new PullRequestInfo(tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_8, tmp$_10, tmp$_11, tmp$_13, destination_2));
            if (this.local$mergedPRList.size === closure$closedPRs) {
              if (this.local$mergedPRList.size > 1) {
                sortWith(this.local$mergedPRList, new Comparator(compareByDescending$lambda_1(GetPRsForMilestone$invoke$lambda$lambda$lambda)));
              }return this.local$mergedPRList;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 4;
            continue;
          case 6:
            if (this.local$pullRequests.size < 50) {
              this.local$morePRsExist = false;
            } else {
              this.local$page = this.local$page + 1 | 0;
            }

            this.state_0 = 2;
            continue;
          case 7:
            if (this.local$mergedPRList.isEmpty()) {
              throw IllegalStateException_init('Found no Pull Requests for milestone');
            }
            if (this.local$mergedPRList.size > 1) {
              sortWith(this.local$mergedPRList, new Comparator(compareByDescending$lambda_1(GetPRsForMilestone$invoke$lambda$lambda)));
            }
            return toList(this.local$mergedPRList);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetPRsForMilestone$invoke$lambda(this$GetPRsForMilestone_0, closure$milestone_0, closure$milestoneClosedAt_0, closure$closedPRs_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GetPRsForMilestone$invoke$lambda(this$GetPRsForMilestone_0, closure$milestone_0, closure$milestoneClosedAt_0, closure$closedPRs_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GetPRsForMilestone.prototype.invoke_cw412z$ = function (milestone, closedPRs, milestoneClosedAt, continuation) {
    return supervisorScope(GetPRsForMilestone$invoke$lambda(this, milestone, milestoneClosedAt, closedPRs), continuation);
  };
  GetPRsForMilestone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GetPRsForMilestone',
    interfaces: []
  };
  function failOrError(message, failOnError) {
    setOutput('failed', true);
    if (failOnError) {
      setFailed(message);
    } else {
      throw IllegalStateException_init(message.toString());
    }
  }
  function repositoryPath(providedPath) {
    var githubWorkspacePath = ActionsEnvironment_getInstance().GITHUB_WORKSPACE;
    githubWorkspacePath = $module$path.resolve(githubWorkspacePath);
    debug("GITHUB_WORKSPACE = '" + githubWorkspacePath + "'");
    var repositoryPath = providedPath.length === 0 ? '.' : providedPath;
    repositoryPath = $module$path.resolve(githubWorkspacePath, repositoryPath);
    debug("repositoryPath = '" + repositoryPath + "'");
    return repositoryPath;
  }
  function readFile(filePath) {
    return readFileSync(filePath, 'utf8');
  }
  function ActionFailedException(message, cause) {
    Throwable.call(this);
    this.message_qs4431$_0 = typeof message === 'undefined' && cause != null ? Kotlin.toString(cause) : message;
    this.cause_d2bewh$_0 = cause;
    this.message_qs4431$_0 = message;
    Kotlin.captureStack(Throwable, this);
    this.name = 'ActionFailedException';
  }
  Object.defineProperty(ActionFailedException.prototype, 'message', {
    get: function () {
      return this.message_qs4431$_0;
    }
  });
  Object.defineProperty(ActionFailedException.prototype, 'cause', {
    get: function () {
      return this.cause_d2bewh$_0;
    }
  });
  ActionFailedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionFailedException',
    interfaces: [Throwable]
  };
  function ActionFailedException_init(message, $this) {
    $this = $this || Object.create(ActionFailedException.prototype);
    ActionFailedException.call($this, message, null);
    return $this;
  }
  function ActionsEnvironment() {
    ActionsEnvironment_instance = this;
    this.HOME_m4bcy7$_0 = Environment_getInstance();
    this.GITHUB_WORKFLOW_niv1vb$_0 = Environment_getInstance();
    this.GITHUB_RUN_ID_g5fz4p$_0 = Environment_getInstance();
    this.GITHUB_RUN_NUMBER_4ns9pn$_0 = Environment_getInstance();
    this.GITHUB_ACTION_spv1am$_0 = Environment_getInstance();
    this.GITHUB_ACTOR_7st50p$_0 = Environment_getInstance();
    this.GITHUB_REPOSITORY_tpriu6$_0 = Environment_getInstance();
    this.GITHUB_EVENT_NAME_oiqsco$_0 = Environment_getInstance();
    this.GITHUB_EVENT_PATH_ohn1wi$_0 = Environment_getInstance();
    this.GITHUB_WORKSPACE_cq351l$_0 = Environment_getInstance();
    this.GITHUB_SHA_3joy68$_0 = Environment_getInstance();
    this.GITHUB_REF_3jpn9j$_0 = Environment_getInstance();
    this.GITHUB_HEAD_REF_q8kxp0$_0 = Environment_getInstance();
    this.GITHUB_BASE_REF_6mda5$_0 = Environment_getInstance();
    this.GITHUB_SERVER_URL_by64ol$_0 = Environment_getInstance();
    this.GITHUB_API_URL_5z9ole$_0 = Environment_getInstance();
    this.GITHUB_GRAPHQL_URL_s3qcod$_0 = Environment_getInstance();
    this.RUNNER_OS_o6z1jl$_0 = Environment_getInstance();
  }
  var ActionsEnvironment$HOME_metadata = new PropertyMetadata('HOME');
  Object.defineProperty(ActionsEnvironment.prototype, 'HOME', {
    configurable: true,
    get: function () {
      return this.HOME_m4bcy7$_0.getValue_t0xcdd$(this, ActionsEnvironment$HOME_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_WORKFLOW_metadata = new PropertyMetadata('GITHUB_WORKFLOW');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_WORKFLOW', {
    configurable: true,
    get: function () {
      return this.GITHUB_WORKFLOW_niv1vb$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_WORKFLOW_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_RUN_ID_metadata = new PropertyMetadata('GITHUB_RUN_ID');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_RUN_ID', {
    configurable: true,
    get: function () {
      return this.GITHUB_RUN_ID_g5fz4p$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_RUN_ID_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_RUN_NUMBER_metadata = new PropertyMetadata('GITHUB_RUN_NUMBER');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_RUN_NUMBER', {
    configurable: true,
    get: function () {
      return this.GITHUB_RUN_NUMBER_4ns9pn$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_RUN_NUMBER_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_ACTION_metadata = new PropertyMetadata('GITHUB_ACTION');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_ACTION', {
    configurable: true,
    get: function () {
      return this.GITHUB_ACTION_spv1am$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_ACTION_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_ACTOR_metadata = new PropertyMetadata('GITHUB_ACTOR');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_ACTOR', {
    configurable: true,
    get: function () {
      return this.GITHUB_ACTOR_7st50p$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_ACTOR_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_REPOSITORY_metadata = new PropertyMetadata('GITHUB_REPOSITORY');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_REPOSITORY', {
    configurable: true,
    get: function () {
      return this.GITHUB_REPOSITORY_tpriu6$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_REPOSITORY_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_EVENT_NAME_metadata = new PropertyMetadata('GITHUB_EVENT_NAME');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_EVENT_NAME', {
    configurable: true,
    get: function () {
      return this.GITHUB_EVENT_NAME_oiqsco$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_EVENT_NAME_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_EVENT_PATH_metadata = new PropertyMetadata('GITHUB_EVENT_PATH');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_EVENT_PATH', {
    configurable: true,
    get: function () {
      return this.GITHUB_EVENT_PATH_ohn1wi$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_EVENT_PATH_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_WORKSPACE_metadata = new PropertyMetadata('GITHUB_WORKSPACE');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_WORKSPACE', {
    configurable: true,
    get: function () {
      return this.GITHUB_WORKSPACE_cq351l$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_WORKSPACE_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_SHA_metadata = new PropertyMetadata('GITHUB_SHA');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_SHA', {
    configurable: true,
    get: function () {
      return this.GITHUB_SHA_3joy68$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_SHA_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_REF_metadata = new PropertyMetadata('GITHUB_REF');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_REF', {
    configurable: true,
    get: function () {
      return this.GITHUB_REF_3jpn9j$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_REF_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_HEAD_REF_metadata = new PropertyMetadata('GITHUB_HEAD_REF');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_HEAD_REF', {
    configurable: true,
    get: function () {
      return this.GITHUB_HEAD_REF_q8kxp0$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_HEAD_REF_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_BASE_REF_metadata = new PropertyMetadata('GITHUB_BASE_REF');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_BASE_REF', {
    configurable: true,
    get: function () {
      return this.GITHUB_BASE_REF_6mda5$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_BASE_REF_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_SERVER_URL_metadata = new PropertyMetadata('GITHUB_SERVER_URL');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_SERVER_URL', {
    configurable: true,
    get: function () {
      return this.GITHUB_SERVER_URL_by64ol$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_SERVER_URL_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_API_URL_metadata = new PropertyMetadata('GITHUB_API_URL');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_API_URL', {
    configurable: true,
    get: function () {
      return this.GITHUB_API_URL_5z9ole$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_API_URL_metadata);
    }
  });
  var ActionsEnvironment$GITHUB_GRAPHQL_URL_metadata = new PropertyMetadata('GITHUB_GRAPHQL_URL');
  Object.defineProperty(ActionsEnvironment.prototype, 'GITHUB_GRAPHQL_URL', {
    configurable: true,
    get: function () {
      return this.GITHUB_GRAPHQL_URL_s3qcod$_0.getValue_t0xcdd$(this, ActionsEnvironment$GITHUB_GRAPHQL_URL_metadata);
    }
  });
  var ActionsEnvironment$RUNNER_OS_metadata = new PropertyMetadata('RUNNER_OS');
  Object.defineProperty(ActionsEnvironment.prototype, 'RUNNER_OS', {
    configurable: true,
    get: function () {
      return this.RUNNER_OS_o6z1jl$_0.getValue_t0xcdd$(this, ActionsEnvironment$RUNNER_OS_metadata);
    }
  });
  ActionsEnvironment.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ActionsEnvironment',
    interfaces: []
  };
  var ActionsEnvironment_instance = null;
  function ActionsEnvironment_getInstance() {
    if (ActionsEnvironment_instance === null) {
      new ActionsEnvironment();
    }return ActionsEnvironment_instance;
  }
  function Environment() {
    Environment_instance = this;
  }
  Environment.prototype.getValue_t0xcdd$ = function (environment, property) {
    var tmp$;
    tmp$ = $module$process.env[property.callableName];
    if (tmp$ == null) {
      throw ActionFailedException_init(property.callableName + ' is not found in process.env');
    }return tmp$;
  };
  Environment.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Environment',
    interfaces: []
  };
  var Environment_instance = null;
  function Environment_getInstance() {
    if (Environment_instance === null) {
      new Environment();
    }return Environment_instance;
  }
  var group = defineInlineFunction('changelog-creator.utils.actions.group_85cpgq$', wrapFunction(function () {
    var startGroup = _.$$importsForInline$$['@actions/core'].startGroup;
    var endGroup = _.$$importsForInline$$['@actions/core'].endGroup;
    return function (name, action) {
      startGroup(name);
      try {
        return action();
      }finally {
        endGroup();
      }
    };
  }));
  $$importsForInline$$['changelog-creator'] = _;
  _.ReleaseNoteBuilder = ReleaseNoteBuilder;
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
  var package$data = _.data || (_.data = {});
  package$data.GithubClient = GithubClient;
  Object.defineProperty(MilestoneRequest, 'Companion', {
    get: MilestoneRequest$Companion_getInstance
  });
  var package$request = package$data.request || (package$data.request = {});
  package$request.MilestoneRequest = MilestoneRequest;
  Object.defineProperty(GithubUser, 'Companion', {
    get: GithubUser$Companion_getInstance
  });
  Object.defineProperty(GithubUser, '$serializer', {
    get: GithubUser$$serializer_getInstance
  });
  var package$response = package$data.response || (package$data.response = {});
  package$response.GithubUser_init_zbp6su$ = GithubUser_init;
  package$response.GithubUser = GithubUser;
  Object.defineProperty(Milestone, 'Companion', {
    get: Milestone$Companion_getInstance
  });
  Object.defineProperty(Milestone, '$serializer', {
    get: Milestone$$serializer_getInstance
  });
  package$response.Milestone_init_yym9vg$ = Milestone_init;
  package$response.Milestone = Milestone;
  Object.defineProperty(PullRequest$Links$LinkHref, 'Companion', {
    get: PullRequest$Links$LinkHref$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Links$LinkHref, '$serializer', {
    get: PullRequest$Links$LinkHref$$serializer_getInstance
  });
  PullRequest$Links.LinkHref_init_q11ckg$ = PullRequest$Links$PullRequest$Links$LinkHref_init;
  PullRequest$Links.LinkHref = PullRequest$Links$LinkHref;
  Object.defineProperty(PullRequest$Links, 'Companion', {
    get: PullRequest$Links$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Links, '$serializer', {
    get: PullRequest$Links$$serializer_getInstance
  });
  PullRequest.Links_init_dwktdj$ = PullRequest$PullRequest$Links_init;
  PullRequest.Links = PullRequest$Links;
  Object.defineProperty(PullRequest$Branch$Repo$License, 'Companion', {
    get: PullRequest$Branch$Repo$License$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Branch$Repo$License, '$serializer', {
    get: PullRequest$Branch$Repo$License$$serializer_getInstance
  });
  PullRequest$Branch$Repo.License_init_cf70nd$ = PullRequest$Branch$Repo$PullRequest$Branch$Repo$License_init;
  PullRequest$Branch$Repo.License = PullRequest$Branch$Repo$License;
  Object.defineProperty(PullRequest$Branch$Repo$Permissions, 'Companion', {
    get: PullRequest$Branch$Repo$Permissions$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Branch$Repo$Permissions, '$serializer', {
    get: PullRequest$Branch$Repo$Permissions$$serializer_getInstance
  });
  PullRequest$Branch$Repo.Permissions_init_74dj6i$ = PullRequest$Branch$Repo$PullRequest$Branch$Repo$Permissions_init;
  PullRequest$Branch$Repo.Permissions = PullRequest$Branch$Repo$Permissions;
  Object.defineProperty(PullRequest$Branch$Repo, 'Companion', {
    get: PullRequest$Branch$Repo$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Branch$Repo, '$serializer', {
    get: PullRequest$Branch$Repo$$serializer_getInstance
  });
  PullRequest$Branch.Repo_init_m9wolc$ = PullRequest$Branch$PullRequest$Branch$Repo_init;
  PullRequest$Branch.Repo = PullRequest$Branch$Repo;
  Object.defineProperty(PullRequest$Branch, 'Companion', {
    get: PullRequest$Branch$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Branch, '$serializer', {
    get: PullRequest$Branch$$serializer_getInstance
  });
  PullRequest.Branch_init_35tah2$ = PullRequest$PullRequest$Branch_init;
  PullRequest.Branch = PullRequest$Branch;
  Object.defineProperty(PullRequest$Label, 'Companion', {
    get: PullRequest$Label$Companion_getInstance
  });
  Object.defineProperty(PullRequest$Label, '$serializer', {
    get: PullRequest$Label$$serializer_getInstance
  });
  PullRequest.Label_init_o1mssb$ = PullRequest$PullRequest$Label_init;
  PullRequest.Label = PullRequest$Label;
  Object.defineProperty(PullRequest$RequestedTeam, 'Companion', {
    get: PullRequest$RequestedTeam$Companion_getInstance
  });
  Object.defineProperty(PullRequest$RequestedTeam, '$serializer', {
    get: PullRequest$RequestedTeam$$serializer_getInstance
  });
  PullRequest.RequestedTeam_init_14qgu9$ = PullRequest$PullRequest$RequestedTeam_init;
  PullRequest.RequestedTeam = PullRequest$RequestedTeam;
  Object.defineProperty(PullRequest, 'Companion', {
    get: PullRequest$Companion_getInstance
  });
  Object.defineProperty(PullRequest, '$serializer', {
    get: PullRequest$$serializer_getInstance
  });
  package$response.PullRequest_init_kexk6r$ = PullRequest_init;
  package$response.PullRequest = PullRequest;
  _.main = main;
  _.resolveInputs = resolveInputs;
  Object.defineProperty(Configuration$Category, 'Companion', {
    get: Configuration$Category$Companion_getInstance
  });
  Object.defineProperty(Configuration$Category, '$serializer', {
    get: Configuration$Category$$serializer_getInstance
  });
  Configuration.Category_init_z8d1ro$ = Configuration$Configuration$Category_init;
  Configuration.Category = Configuration$Category;
  Object.defineProperty(Configuration$Transformer, 'Companion', {
    get: Configuration$Transformer$Companion_getInstance
  });
  Object.defineProperty(Configuration$Transformer, '$serializer', {
    get: Configuration$Transformer$$serializer_getInstance
  });
  Configuration.Transformer_init_1jgqbb$ = Configuration$Configuration$Transformer_init;
  Configuration.Transformer = Configuration$Transformer;
  Object.defineProperty(Configuration, 'Companion', {
    get: Configuration$Companion_getInstance
  });
  Object.defineProperty(Configuration, '$serializer', {
    get: Configuration$$serializer_getInstance
  });
  var package$models = _.models || (_.models = {});
  package$models.Configuration_init_hrgx1c$ = Configuration_init;
  package$models.Configuration = Configuration;
  package$models.Inputs = Inputs;
  package$models.MilestoneInfo = MilestoneInfo;
  package$models.PullRequestInfo = PullRequestInfo;
  var package$usecase = _.usecase || (_.usecase = {});
  package$usecase.BuildChangelog = BuildChangelog;
  package$usecase.FetchLastClosedMilestone = FetchLastClosedMilestone;
  package$usecase.FetchMilestoneByName = FetchMilestoneByName;
  package$usecase.GetPRsForMilestone = GetPRsForMilestone;
  var package$utils = _.utils || (_.utils = {});
  package$utils.failOrError_ivxn3r$ = failOrError;
  package$utils.repositoryPath_61zpoe$ = repositoryPath;
  var package$actions = package$utils.actions || (package$utils.actions = {});
  package$actions.ActionFailedException_init_61zpoe$ = ActionFailedException_init;
  package$actions.ActionFailedException = ActionFailedException;
  Object.defineProperty(package$actions, 'ActionsEnvironment', {
    get: ActionsEnvironment_getInstance
  });
  $$importsForInline$$['17def1782b5ee417-kotlinx-nodejs-jsLegacy'] = $module$_17def1782b5ee417_kotlinx_nodejs_jsLegacy;
  $$importsForInline$$['@actions/core'] = $module$_actions_core;
  package$actions.group_85cpgq$ = group;
  GithubUser$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Milestone$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Links$LinkHref$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Links$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Branch$Repo$License$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Branch$Repo$Permissions$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Branch$Repo$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Branch$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$Label$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$RequestedTeam$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  PullRequest$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Configuration$Category$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Configuration$Transformer$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Configuration$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  main(internal_0.EmptyContinuation, false);
  Kotlin.defineModule('changelog-creator', _);
  return _;
}(module.exports, require('kotlin'), require('@actions/core'), require('ktor-ktor-client-core-jsLegacy'), require('ktor-ktor-client-json-jsLegacy'), require('ktor-ktor-http-jsLegacy'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy'), require('path'), require('fs'), require('kotlinx-coroutines-core'), require('Kotlin-DateTime-library-kotlinx-datetime-js-legacy'), require('process'), require('17def1782b5ee417-kotlinx-nodejs-jsLegacy')));

//# sourceMappingURL=changelog-creator.js.map

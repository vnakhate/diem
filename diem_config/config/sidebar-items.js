initSidebarItems({"constant":[["CONNECTION_BACKOFF_BASE",""],["CONNECTIVITY_CHECK_INTERVAL_MS",""],["DEFAULT_ADDRESS",""],["DEFAULT_BATCH_SIZE_LIMIT",""],["DEFAULT_CONTENT_LENGTH_LIMIT",""],["DEFAULT_JSON_RPC_ADDRESS",""],["DEFAULT_JSON_RPC_PORT",""],["DEFAULT_PAGE_SIZE_LIMIT",""],["DEFAULT_PORT",""],["DEFAULT_REQUEST_CONTENT_LENGTH_LIMIT",""],["DEFAULT_STREAM_RPC_MAX_POLL_INTERVAL_MS",""],["DEFAULT_STREAM_RPC_POLL_INTERVAL_MS",""],["DEFAULT_STREAM_RPC_SEND_QUEUE_SIZE",""],["DEFAULT_STREAM_RPC_SUBSCRIPTION_FETCH_SIZE",""],["HANDSHAKE_VERSION","Current supported protocol negotiation handshake version. See `network::protocols::wire::v1`."],["IP_BYTE_BUCKET_RATE",""],["IP_BYTE_BUCKET_SIZE",""],["MAX_CONCURRENT_NETWORK_REQS",""],["MAX_CONNECTION_DELAY_MS",""],["MAX_FRAME_SIZE",""],["MAX_FULLNODE_OUTBOUND_CONNECTIONS",""],["MAX_INBOUND_CONNECTIONS",""],["NETWORK_CHANNEL_SIZE",""],["PING_FAILURES_TOLERATED",""],["PING_INTERVAL_MS",""],["PING_TIMEOUT_MS",""]],"enum":[["ConsensusProposerType",""],["DiscoveryMethod",""],["Error",""],["ExecutionCorrectnessService","Defines how execution correctness should be run"],["Identity",""],["PeerRole","Represents the Role that a peer plays in the network ecosystem rather than the type of node. Determines how nodes are connected to other nodes, and how discovery views them."],["RoleType",""],["SafetyRulesService","Defines how safety rules should be executed"],["SecureBackend",""],["Token","Tokens can either be directly within this config or stored somewhere on disk."],["WaypointConfig",""]],"fn":[["invariant",""]],"struct":[["ApiConfig",""],["BaseConfig",""],["ConsensusConfig",""],["DataStreamingServiceConfig",""],["DebugInterfaceConfig",""],["DeprecatedConfig","Represents a deprecated config that provides no field verification."],["ExecutionConfig",""],["GitHubConfig",""],["IdentityFromConfig","The identity is stored within the config."],["IdentityFromStorage","This represents an identity in a secure-storage as defined in NodeConfig::secure."],["JsonRpcConfig",""],["KeyManagerConfig",""],["LeaderReputationConfig",""],["LoggerConfig",""],["MempoolConfig",""],["NetworkConfig",""],["NodeConfig","Config pulls in configuration information from the config file. This is used to set up the nodes and configure various parameters. The config file is broken up into sections for each module so that only that module can be passed around"],["OnDiskStorageConfig",""],["ParseRoleError",""],["Peer","Represents a single seed configuration for a seed peer"],["RateLimitConfig",""],["RemoteExecutionService",""],["RemoteService",""],["RocksdbConfig","Port selected RocksDB options for tuning underlying rocksdb instance of DiemDB. see https://github.com/facebook/rocksdb/blob/master/include/rocksdb/options.h for detailed explanations."],["RootPath",""],["SafetyRulesConfig",""],["SafetyRulesTestConfig",""],["StateSyncConfig",""],["StorageConfig",""],["StorageServiceConfig",""],["StreamConfig","This API is experimental and subject to change Documentation is in /json-rpc/src/stream_rpc/README.md"],["TestConfig",""],["TokenFromConfig",""],["TokenFromDisk",""],["VaultConfig",""]],"trait":[["PersistableConfig",""]],"type":[["PeerSet",""]]});
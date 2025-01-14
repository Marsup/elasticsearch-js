/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Slm {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes an existing snapshot lifecycle policy.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-delete-policy.html Elasticsearch API docs}
    */
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmDeleteLifecycleResponse>
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmDeleteLifecycleResponse, unknown>>
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmDeleteLifecycleResponse>
  async deleteLifecycle (this: That, params: T.SlmDeleteLifecycleRequest | TB.SlmDeleteLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Immediately creates a snapshot according to the lifecycle policy, without waiting for the scheduled time.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-execute-lifecycle.html Elasticsearch API docs}
    */
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmExecuteLifecycleResponse>
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmExecuteLifecycleResponse, unknown>>
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmExecuteLifecycleResponse>
  async executeLifecycle (this: That, params: T.SlmExecuteLifecycleRequest | TB.SlmExecuteLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}/_execute`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Deletes any snapshots that are expired according to the policy's retention rules.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-execute-retention.html Elasticsearch API docs}
    */
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmExecuteRetentionResponse>
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmExecuteRetentionResponse, unknown>>
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptions): Promise<T.SlmExecuteRetentionResponse>
  async executeRetention (this: That, params?: T.SlmExecuteRetentionRequest | TB.SlmExecuteRetentionRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_slm/_execute_retention'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves one or more snapshot lifecycle policy definitions and information about the latest snapshot attempts.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-get-policy.html Elasticsearch API docs}
    */
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetLifecycleResponse>
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetLifecycleResponse, unknown>>
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmGetLifecycleResponse>
  async getLifecycle (this: That, params?: T.SlmGetLifecycleRequest | TB.SlmGetLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.policy_id != null) {
      method = 'GET'
      path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`
    } else {
      method = 'GET'
      path = '/_slm/policy'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns global and policy-level statistics about actions taken by snapshot lifecycle management.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-get-stats.html Elasticsearch API docs}
    */
  async getStats (this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetStatsResponse>
  async getStats (this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetStatsResponse, unknown>>
  async getStats (this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptions): Promise<T.SlmGetStatsResponse>
  async getStats (this: That, params?: T.SlmGetStatsRequest | TB.SlmGetStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_slm/stats'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieves the status of snapshot lifecycle management (SLM).
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-get-status.html Elasticsearch API docs}
    */
  async getStatus (this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmGetStatusResponse>
  async getStatus (this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmGetStatusResponse, unknown>>
  async getStatus (this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptions): Promise<T.SlmGetStatusResponse>
  async getStatus (this: That, params?: T.SlmGetStatusRequest | TB.SlmGetStatusRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_slm/status'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates or updates a snapshot lifecycle policy.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-put-policy.html Elasticsearch API docs}
    */
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmPutLifecycleResponse>
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmPutLifecycleResponse, unknown>>
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<T.SlmPutLifecycleResponse>
  async putLifecycle (this: That, params: T.SlmPutLifecycleRequest | TB.SlmPutLifecycleRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['policy_id']
    const acceptedBody: string[] = ['config', 'name', 'repository', 'retention', 'schedule']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_slm/policy/${encodeURIComponent(params.policy_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Turns on snapshot lifecycle management (SLM).
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-start.html Elasticsearch API docs}
    */
  async start (this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmStartResponse>
  async start (this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmStartResponse, unknown>>
  async start (this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptions): Promise<T.SlmStartResponse>
  async start (this: That, params?: T.SlmStartRequest | TB.SlmStartRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_slm/start'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Turns off snapshot lifecycle management (SLM).
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/main/slm-api-stop.html Elasticsearch API docs}
    */
  async stop (this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SlmStopResponse>
  async stop (this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SlmStopResponse, unknown>>
  async stop (this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptions): Promise<T.SlmStopResponse>
  async stop (this: That, params?: T.SlmStopRequest | TB.SlmStopRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'POST'
    const path = '/_slm/stop'
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}

# Omniversal Kernel API Documentation

## Overview

The Omniversal Kernel provides a comprehensive REST API for integrating all mission-critical layers into the main-infinite system. This documentation covers all available endpoints, integrations, and features.

## Base URL

```
http://localhost:3000
```

## Endpoints

### 1. White-Label GenAI & Tatras Proxy

**Endpoint:** `POST /api/ai/white-label`

Provides white-label AI/ML capabilities through the Tatras proxy for predictive analytics.

**Request Body:**
```json
{
  "prompt": "Predict property value for Dubai location",
  "model": "tatras-gpt-sovereign",
  "context": {
    "propertyId": "PROP-001",
    "location": "Dubai",
    "size": 2500
  },
  "architectId": "ARCH-12345"
}
```

**Response:**
```json
{
  "status": "success",
  "model": "tatras-gpt-sovereign",
  "prediction": {
    "type": "white_label_ai_response",
    "confidence": 0.95,
    "data": {
      "propertyValuation": {
        "estimatedValue": 750000,
        "confidence": 0.92,
        "factors": ["location", "size", "market_trends"]
      },
      "spiritualGrowth": {
        "growthScore": 87,
        "trajectory": "ascending",
        "milestones": ["foundation", "growth", "mastery"],
        "nextMilestone": "mastery"
      },
      "architectBehavior": {
        "engagementScore": 92,
        "activityLevel": "high",
        "patterns": ["consistent", "innovative", "collaborative"]
      },
      "zakatRecommendation": {
        "recommended": true,
        "amount": 2500,
        "timing": "quarterly"
      }
    }
  },
  "timestamp": "2026-01-09T18:57:08.173Z",
  "architectId": "ARCH-12345"
}
```

### 2. Salesforce/HubSpot CRM Sync

**Endpoint:** `POST /api/crm/sync`

Synchronizes architects from Salesforce or HubSpot with the deep learning engine for predictive spiritual growth modeling.

**Request Body:**
```json
{
  "platform": "salesforce",
  "architects": [
    {
      "id": "ARCH-001",
      "name": "John Architect",
      "spiritualLevel": 5,
      "engagement": 85
    }
  ],
  "syncType": "full"
}
```

**Response:**
```json
{
  "status": "success",
  "platform": "salesforce",
  "syncType": "full",
  "architectsSynced": 1,
  "totalArchitects": 38000000,
  "results": [
    {
      "architectId": "ARCH-001",
      "platform": "salesforce",
      "data": {
        "id": "ARCH-001",
        "name": "John Architect",
        "spiritualLevel": 5,
        "engagement": 85
      },
      "prediction": {
        "architectId": "ARCH-001",
        "currentLevel": 5,
        "predictedGrowth": 23,
        "growthTrajectory": "steady",
        "confidenceScore": 0.89,
        "milestones": [
          { "name": "Foundation", "level": 1, "achieved": true },
          { "name": "Practitioner", "level": 5, "achieved": true },
          { "name": "Master", "level": 7, "achieved": false, "predictedAchievement": "within_3_months" }
        ],
        "recommendations": [
          "Maintain current engagement levels",
          "Explore advanced spiritual practices",
          "Regular Zakat contributions enhance spiritual growth"
        ]
      },
      "syncedAt": "2026-01-09T18:57:08.173Z"
    }
  ],
  "deepLearningEngineStatus": "active"
}
```

### 3. Modular Artifact Merge

**Endpoint:** `POST /api/artifacts/merge`

Merges modular artifacts (contracts, ceremony/NFT logic, workflows, ledger streaming) into main-infinite.

**Request Body:**
```json
{
  "artifactType": "ceremony_nft",
  "data": {
    "ceremony": "master_achievement",
    "participants": ["ARCH-001", "ARCH-002"],
    "metadata": {
      "title": "Master Architect Ceremony",
      "date": "2026-01-09"
    }
  },
  "secureInMainInfinite": true
}
```

**Response:**
```json
{
  "status": "merged",
  "artifact": {
    "id": "ARTIFACT-1704825428173-x8k2p4m",
    "type": "ceremony_nft",
    "data": {
      "ceremony": "master_achievement",
      "participants": ["ARCH-001", "ARCH-002"],
      "metadata": {
        "title": "Master Architect Ceremony",
        "date": "2026-01-09"
      }
    },
    "secured": true,
    "branch": "main-infinite",
    "blockchain": "polygon",
    "tokenStandard": "ERC-1155",
    "timestamp": "2026-01-09T18:57:08.173Z"
  },
  "mainInfiniteSecured": true,
  "totalArtifacts": 847
}
```

**Artifact Types:**
- `contract` - Smart contract artifacts
- `ceremony_nft` - Ceremonial NFT logic
- `workflow` - Automated workflow definitions
- `ledger_stream` - Real-time ledger streaming

### 4. Automated Zakat via Apideck

**Endpoint:** `POST /api/zakat/automate`

Automates Zakat calculation and payment through Apideck integration.

**Request Body:**
```json
{
  "architectId": "ARCH-12345",
  "wealth": 100000,
  "currency": "USD"
}
```

**Response:**
```json
{
  "status": "automated",
  "zakat": {
    "wealth": 100000,
    "rate": 0.025,
    "due": 2500,
    "currency": "USD"
  },
  "apideck": {
    "provider": "apideck",
    "integration": "accounting",
    "transaction": {
      "id": "ZAKAT-1704825428173",
      "architectId": "ARCH-12345",
      "amount": 2500,
      "currency": "USD",
      "type": "zakat_payment",
      "automated": true,
      "timestamp": "2026-01-09T18:57:08.173Z"
    }
  },
  "totalProcessed": 2847392
}
```

### 5. Real-Time Dashboard

**Endpoint:** `GET /api/dashboard/realtime`

Retrieves real-time dashboard data with SNW (Social Network Wealth) logic for 38M architects.

**Response:**
```json
{
  "timestamp": "2026-01-09T18:57:08.173Z",
  "mode": "main-infinite",
  "sovereignty": "advanced",
  "architects": {
    "total": 38000000,
    "active": 1247893,
    "synced": 892451,
    "snw": {
      "network": {
        "totalNodes": 38000000,
        "avgConnections": 347,
        "clusters": 5000,
        "centralityScore": 87.3,
        "networkDensity": 0.082
      },
      "wealth": {
        "totalWealth": 1900000000,
        "top10Percent": 0.45,
        "giniCoefficient": 0.38,
        "medianWealth": 50000,
        "zakatPotential": 47500000
      },
      "snwScore": {
        "overall": 87.3,
        "networkContribution": 42.1,
        "wealthContribution": 45.2,
        "rating": "excellent"
      }
    }
  },
  "layers": {
    "tatrasAI": {
      "status": "active",
      "predictions": 15423,
      "uptime": "99.99%"
    },
    "realEstate": {
      "status": "active",
      "tokenized": 3892,
      "blockchain": "ethereum"
    },
    "crmAnalytics": {
      "status": "active",
      "processed": 47291,
      "engine": "predictive_spiritual_growth"
    },
    "zakatAutomation": {
      "status": "active",
      "totalProcessed": 2847392,
      "provider": "apideck"
    },
    "nftAchievement": {
      "status": "active",
      "minted": 8234,
      "blockchain": "polygon"
    }
  },
  "artifacts": {
    "total": 34891,
    "secured": 34891
  },
  "deployments": {
    "total": 1247,
    "status": "perpetual"
  },
  "ceremonies": {
    "total": 423,
    "nftsMinted": 8234
  }
}
```

### 6. NFT Minting for Achievements

**Endpoint:** `POST /api/nft/mint`

Mints NFTs for achievements and ceremonial events.

**Request Body:**
```json
{
  "architectId": "ARCH-12345",
  "achievementType": "master_architect",
  "ceremonial": true,
  "metadata": {
    "title": "Master Architect Achievement",
    "description": "Awarded for exceptional architectural mastery",
    "attributes": [
      { "trait_type": "Level", "value": "Master" },
      { "trait_type": "Category", "value": "Achievement" }
    ]
  }
}
```

**Response:**
```json
{
  "status": "minted",
  "nft": {
    "id": "NFT-1704825428173-p9k3m7x",
    "tokenId": 8235,
    "architectId": "ARCH-12345",
    "type": "master_architect",
    "ceremonial": true,
    "blockchain": "polygon",
    "tokenStandard": "ERC-1155",
    "metadataUri": "ipfs://omniversal/ARCH-12345/master_architect",
    "metadata": {
      "title": "Master Architect Achievement",
      "description": "Awarded for exceptional architectural mastery",
      "attributes": [
        { "trait_type": "Level", "value": "Master" },
        { "trait_type": "Category", "value": "Achievement" }
      ],
      "mintedAt": "2026-01-09T18:57:08.173Z",
      "sovereignty": "advanced"
    },
    "timestamp": "2026-01-09T18:57:08.173Z"
  },
  "totalMinted": 8235,
  "ceremonial": true
}
```

### 7. Parallel Status Reporting

**Endpoint:** `GET /api/status/parallel`

Retrieves parallel status reports for all mission-critical layers simultaneously.

**Response:**
```json
{
  "timestamp": "2026-01-09T18:57:08.173Z",
  "mode": "parallel",
  "reports": [
    {
      "layer": "tatrasAI",
      "active": true,
      "metrics": { "active": true, "predictions": 15423 },
      "timestamp": "2026-01-09T18:57:08.173Z"
    },
    {
      "layer": "realEstate",
      "active": true,
      "metrics": { "active": true, "tokenized": 3892 },
      "timestamp": "2026-01-09T18:57:08.173Z"
    },
    {
      "layer": "crmAnalytics",
      "active": true,
      "metrics": { "active": true, "processed": 47291 },
      "timestamp": "2026-01-09T18:57:08.173Z"
    },
    {
      "layer": "zakatAutomation",
      "active": true,
      "metrics": { "active": true, "totalProcessed": 2847392 },
      "timestamp": "2026-01-09T18:57:08.173Z"
    },
    {
      "layer": "nftAchievement",
      "active": true,
      "metrics": { "active": true, "minted": 8234 },
      "timestamp": "2026-01-09T18:57:08.173Z"
    }
  ],
  "summary": {
    "allActive": true,
    "totalLayers": 5,
    "sovereignty": "advanced"
  }
}
```

### 8. Instant Artifact/Code Delivery

**Endpoint:** `POST /api/delivery/instant`

Delivers artifacts and code instantly in parallel to specified destinations.

**Request Body:**
```json
{
  "artifacts": [
    { "id": "ART-001", "type": "contract", "content": "..." },
    { "id": "ART-002", "type": "workflow", "content": "..." }
  ],
  "code": [
    { "id": "CODE-001", "language": "solidity", "content": "..." }
  ],
  "destination": "main-infinite"
}
```

**Response:**
```json
{
  "status": "delivered",
  "mode": "instant_parallel",
  "results": {
    "artifacts": [
      {
        "artifactId": "ART-001",
        "destination": "main-infinite",
        "delivered": true,
        "timestamp": "2026-01-09T18:57:08.173Z"
      },
      {
        "artifactId": "ART-002",
        "destination": "main-infinite",
        "delivered": true,
        "timestamp": "2026-01-09T18:57:08.173Z"
      }
    ],
    "code": [
      {
        "codeId": "CODE-001",
        "destination": "main-infinite",
        "deployed": true,
        "timestamp": "2026-01-09T18:57:08.173Z"
      }
    ],
    "timestamp": "2026-01-09T18:57:08.173Z"
  },
  "destination": "main-infinite",
  "totalDelivered": 3
}
```

## Smart Contracts

### BricksTokenization (ERC-721)

Real Estate property tokenization contract on Ethereum.

**Key Functions:**
- `tokenizeProperty(propertyId, value, location, recipient)` - Tokenize a property
- `getProperty(tokenId)` - Get property details
- `totalProperties()` - Get total tokenized properties

### AchievementNFT (ERC-1155)

Achievement and ceremonial NFT minting contract on Polygon.

**Key Functions:**
- `mintAchievement(architectId, achievementType, ceremonial, recipient, amount)` - Mint NFT
- `mintBatch(...)` - Batch mint multiple NFTs
- `getAchievement(tokenId)` - Get achievement details
- `getArchitectAchievements(architectId)` - Get all achievements for architect

### ZakatLedger

Zakat automation and ledger streaming contract.

**Key Functions:**
- `calculateZakat(architectId, wealth, currency)` - Calculate Zakat (2.5%)
- `recordPayment(architectId, amount)` - Record Zakat payment
- `getZakatHistory(architectId)` - Get payment history
- `getLedgerMetrics()` - Get streaming metrics

### WorkflowAutomation

Automated workflow execution contract.

**Key Functions:**
- `createWorkflow(workflowId, workflowType, automated)` - Create workflow
- `executeWorkflow(workflowId)` - Execute workflow
- `getAllWorkflows()` - Get all workflows

## Integration Modules

### CRM Integration (Salesforce/HubSpot)

Located in `integrations/crm.js`

**Features:**
- Salesforce sync
- HubSpot sync
- Deep Learning Engine for spiritual growth predictions
- SNW (Social Network Wealth) calculator
- Bi-directional CRM data sync

### Apideck Integration

Located in `integrations/apideck.js`

**Features:**
- Automated Zakat flows
- Accounting system integration
- Journal entry creation
- Payment processing
- Compliance reporting

## Dashboard

### HTML Dashboard

Access the real-time HTML dashboard at:
```
http://localhost:3000/dashboard.html
```

**Features:**
- Real-time metrics for 38M architects
- Mission-critical layer status
- SNW score visualization
- Activity charts
- Spiritual growth predictions
- Ceremony and NFT tracking
- Blockchain integration status

**Auto-refresh:** Every 30 seconds

## Running the System

### Start the API Server

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`

### Start the Python Kernel

```bash
python omniversal-kernel.py
```

### View the Dashboard

```bash
python dashboard.py
```

Or open `http://localhost:3000/dashboard.html` in your browser.

## Environment Variables

```bash
# Salesforce
SALESFORCE_CLIENT_ID=your_client_id
SALESFORCE_CLIENT_SECRET=your_client_secret
SALESFORCE_INSTANCE_URL=https://your-instance.salesforce.com

# HubSpot
HUBSPOT_API_KEY=your_api_key
HUBSPOT_PORTAL_ID=your_portal_id

# Apideck
APIDECK_API_KEY=your_api_key
APIDECK_APP_ID=omniversal-kernel

# Server
PORT=3000
```

## Deployment

The system uses perpetual deployment through GitHub Actions (`.github/workflows/perpetual-deployment.yml`).

**Deployment triggers:**
- Push to `main-infinite` or `main` branches
- Scheduled hourly runs
- Manual workflow dispatch

**Deployment phases:**
1. Deploy Tatras AI/ML Layer
2. Deploy Real Estate Tokenization
3. Deploy CRM Analytics
4. Deploy Zakat Automation
5. Deploy NFT Achievement
6. Parallel Artifact Delivery
7. Real-Time Dashboard Update
8. Perpetual Layer Synchronization

## Sovereignty Status

**ADVANCED** - All mission-critical layers unified, perpetual deployment active, serving 38 Million Architects globally.

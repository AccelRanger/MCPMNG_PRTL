const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const config = require('../config.json');

const promotionsFilePath = path.join(__dirname, '..', 'json', 'promotions.json');
const demotionsFilePath = path.join(__dirname, '..', 'json', 'demotions.json');
const blacklistFilePath = path.join(__dirname, '..', 'json', 'blacklists.json');
const gameBansFilePath = path.join(__dirname, '..', 'json', 'gameBans.json');
const hubBlacklistFilePath = path.join(__dirname, '..', 'json', 'hubBlacklists.json');

// Ensure promotions.json exists
if (!fs.existsSync(promotionsFilePath)) fs.writeFileSync(promotionsFilePath, JSON.stringify({}));
if (!fs.existsSync(demotionsFilePath)) fs.writeFileSync(demotionsFilePath, JSON.stringify({}));
if (!fs.existsSync(blacklistFilePath)) fs.writeFileSync(blacklistFilePath, JSON.stringify({}));
if (!fs.existsSync(gameBansFilePath)) fs.writeFileSync(gameBansFilePath, JSON.stringify({}));
if (!fs.existsSync(hubBlacklistFilePath)) fs.writeFileSync(hubBlacklistFilePath, JSON.stringify({}));

// Middleware to check API key

router.use((req, res, next) => {
    const apiKey = req.header('apiKey');
    if (apiKey !== config.apiKey) {
        return res.status(403).json({ error: 'Forbidden' });
    }
   next();
});

router.post('/logPromotion/:userId/:rank', (req, res) => {
    const userId = req.params.userId;
    const rank = req.params.rank;

    const logData = JSON.parse(fs.readFileSync(promotionsFilePath));
    logData[userId] = rank;
    fs.writeFileSync(promotionsFilePath, JSON.stringify(logData, null, 2));

    res.json({ message: `User ${userId} promoted to rank ${rank}` });
});

router.post('/logDemotion/:userId/:rank', (req, res) => {
    const userId = req.params.userId;
    const rank = req.params.rank;

    const logData = JSON.parse(fs.readFileSync(demotionsFilePath));
    logData[userId] = rank;
    fs.writeFileSync(demotionsFilePath, JSON.stringify(logData, null, 2));

    res.json({ message: `User ${userId} demoted to rank ${rank}` });
});

///////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/blacklist/:userId/:reason', (req, res) => {
    const userId = req.params.userId;
    const reason = req.params.reason;

    const logData = JSON.parse(fs.readFileSync(blacklistFilePath));
    logData[userId] = reason;
    fs.writeFileSync(blacklistFilePath, JSON.stringify(logData, null, 2));

    res.json({ message: `User ${userId} was blacklisted for the following reason: ${rank}` });
});

router.post('/hubBlacklist/:userId/:reason', (req, res) => {
    const userId = req.params.userId;
    const reason = req.params.reason;

    const logData = JSON.parse(fs.readFileSync(hubBlacklistFilePath));
    logData[userId] = reason;
    fs.writeFileSync(hubBlacklistFilePath, JSON.stringify(logData, null, 2));

    res.json({ message: `User ${userId}  was hub blacklisted for the following reason: ${rank}` });
});

router.post('/gameBan/:userId/:reason', (req, res) => {
    const userId = req.params.userId;
    const reason = req.params.reason;

    const logData = JSON.parse(fs.readFileSync(gameBansFilePath));
    logData[userId] = reason;
    fs.writeFileSync(gameBansFilePath, JSON.stringify(logData, null, 2));

    res.json({ message: `User ${userId}  was game banned for the following reason: ${rank}` });
});

///////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/checkPromotion/:userId', (req, res) => {
    const userId = req.params.userId;

    const logData = JSON.parse(fs.readFileSync(promotionsFilePath));
    const reason = logData[userId];

    if (reason) {
        res.json({ userId, reason });
    } else {
        res.status(404).json({ error: 'User not found in logs' });
    }
});

router.get('/checkDemotion/:userId', (req, res) => {
    const userId = req.params.userId;

    const logData = JSON.parse(fs.readFileSync(demotionsFilePath));
    const reason = logData[userId];

    if (reason) {
        res.json({ userId, reason });
    } else {
        res.status(404).json({ error: 'User not found in logs' });
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

router.get('/getBlacklist/:userId', (req, res) => {
    const userId = req.params.userId;

    const logData = JSON.parse(fs.readFileSync(blacklistFilePath));
    const reason = logData[userId];

    if (reason) {
        res.json({ userId, reason });
    } else {
        res.status(404).json({ error: 'User not found in logs' });
    }
});

router.get('/getHubBlacklist/:userId', (req, res) => {
    const userId = req.params.userId;

    const logData = JSON.parse(fs.readFileSync(hubBlacklistFilePath));
    const reason = logData[userId];

    if (reason) {
        res.json({ userId, reason });
    } else {
        res.status(404).json({ error: 'User not found in logs' });
    }
});

router.get('/getGameBan/:userId', (req, res) => {
    const userId = req.params.userId;

    const logData = JSON.parse(fs.readFileSync(gameBansFilePath));
    const reason = logData[userId];

    if (reason) {
        res.json({ userId, reason });
    } else {
        res.status(404).json({ error: 'User not found in logs' });
    }
});

module.exports = router;

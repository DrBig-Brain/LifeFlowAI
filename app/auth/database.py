from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

client = AsyncIOMotorClient(os.getenv("MONGODB_CONNECT_URI"))
db = client[os.getenv("DB_NAME")]

users_collection = db["users"]
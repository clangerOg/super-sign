import { InsertOneResult, ObjectId, WithId } from 'mongodb';
import clientPromise from '../mongodb/mongodb';

const DB = 'super_sign';
const COLLECTION = 'signatures';

export interface Signature {
  createdAt: number;
  title: string;
  configuration: SignatureProps;
  settings: {
    public: boolean;
  };
}

export async function getSignature(
  _id: string | ObjectId
): Promise<WithId<Signature> | null> {
  // parse id to ObjectId
  const id: ObjectId = new ObjectId(_id);

  // get client, db and collection
  const client = await clientPromise;
  const db = client.db(DB);
  const collection = db.collection<Signature>(COLLECTION);

  // find signature in collection by id
  const response = await collection.findOne({ _id: id });

  // return signature
  return response;
}

export async function getManySignatures(): Promise<WithId<Signature>[]> {
  // get client, db and collection
  const client = await clientPromise;
  const db = client.db(DB);
  const collection = db.collection<Signature>(COLLECTION);

  // get first 10 signatures from collection
  const response = await collection.find().limit(10).toArray();

  // return signatures
  return response;
}

export async function createSignature(
  signature: Signature
): Promise<InsertOneResult<Signature>> {
  // get client, db and collection
  const client = await clientPromise;
  const db = client.db(DB);
  const collection = db.collection<Signature>(COLLECTION);

  // insert signature into collection
  const response = await collection.insertOne(signature);

  return response;
}

export async function updateSignature(
  signature: WithDocId<Signature>
): Promise<WithId<Signature> | null> {
  // parse id to ObjectId
  const id: ObjectId = new ObjectId(signature._id);

  // get client, db and collection
  const client = await clientPromise;
  const db = client.db(DB);
  const collection = db.collection<Signature>(COLLECTION);

  const parsedSignature: WithId<Signature> = {
    ...signature,
    _id: id,
  };

  // update signature in collection by id
  const response = await collection.findOneAndUpdate(
    { _id: id },
    { $set: parsedSignature }
  );

  // return signature
  return response.value;
}

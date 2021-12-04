import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SquadWhereInput } from './squad-where.input';
import { SquadOrderByWithRelationInput } from './squad-order-by-with-relation.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SquadScalarFieldEnum } from './squad-scalar-field.enum';

@ArgsType()
export class FindFirstSquadArgs {

    @Field(() => SquadWhereInput, {nullable:true})
    where?: SquadWhereInput;

    @Field(() => [SquadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SquadOrderByWithRelationInput>;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    cursor?: SquadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SquadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SquadScalarFieldEnum>;
}
